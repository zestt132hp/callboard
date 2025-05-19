import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() images: string[] = [];
  @Input() title!: string;
  @Input() category!: string;
  @Input() description!: string;
  activeMiniIndex = 0;
}
