import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './components/product-list/product-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: Category[];
  selectedCategoryId: number | null = null;
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.products = this.productService.getProductsByCategory(categoryId);
  }

  onDeleteProduct(productId: number) {
    this.productService.deleteProduct(productId);
    if (this.selectedCategoryId) {
      this.products = this.productService.getProductsByCategory(this.selectedCategoryId);
    }
  }
}