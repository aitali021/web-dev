import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<void>();

  like() {
    this.product.likes++;
  }

  shareWhatsApp() {
    const text = `${this.product.name} - ${this.product.price} ₸`;
    const url = `https://wa.me/?text=${encodeURIComponent(text + ' ' + this.product.link)}`;
    window.open(url, '_blank');
  }

  onDelete() {
    this.delete.emit();
  }
}