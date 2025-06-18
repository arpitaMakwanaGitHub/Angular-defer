import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './github-user.component.html',
  styleUrl: './github-user.component.scss'
})
export class GithubUserComponent {
  http = inject(HttpClient);
  user: any = null;

  ngOnInit() {
    this.http.get('https://api.github.com/users/octocat')
      .subscribe(data => this.user = data);
  }
}
