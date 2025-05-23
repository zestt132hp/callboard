import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.scss'
})
export class ImageCarouselComponent {
  @Input() images: string[] = [];
  activeIndex = 0;

  addToCart() {
    // Логика добавления в корзину
  }
}
