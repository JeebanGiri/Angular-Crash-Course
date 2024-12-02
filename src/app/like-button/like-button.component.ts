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

  increment() {
    this.totalLike + 1;
  }
  decrement() {
    this.totalLike - 1;
  }

  isLike = false;
  toggleInfo() {
    this.isLike = !this.isLike;
    this.increment();
  }
}
