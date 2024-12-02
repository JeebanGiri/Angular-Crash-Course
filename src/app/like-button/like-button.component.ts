import { Component } from '@angular/core';

@Component({
  selector: 'app-like-button',
  standalone: true,
  imports: [],
  templateUrl: './like-button.component.html',
  styleUrl: './like-button.component.css',
})
export class LikeButtonComponent {
  totalLike = 100;
  isLiked = false;

  toggleLike() {
    this.isLiked = !this.isLiked;
    this.totalLike += this.isLiked ? 1 : -1;
  }
}
