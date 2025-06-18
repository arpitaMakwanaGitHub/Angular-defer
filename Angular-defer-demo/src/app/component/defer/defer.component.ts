import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GithubUserComponent } from '../github-user/github-user.component';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [CommonModule, GithubUserComponent],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.scss'
})
export class DeferComponent {
  showUser = false;
}
