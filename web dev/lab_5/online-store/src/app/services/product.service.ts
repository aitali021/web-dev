import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';    

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Смартфондар' },
    { id: 2, name: 'Ноутбуктар' },
    { id: 3, name: 'Наушниктер' },
    { id: 4, name: 'Планшеттер' }
  ];

  private products: Product[] = [
    { id: 1, name: 'iPhone 15 Pro Max', description: 'Флагман Apple', price: 649990, rating: 4.8, image: '/images/iphone-15.jpg', link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-chernyi-113138363/?c=750000000', categoryId: 1, likes: 0 },
    { id: 2, name: 'Samsung S24 Ultra', description: 'Флагман Samsung', price: 499990, rating: 4.7, image: '/images/s24-ultra.jpg', link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000', categoryId: 1, likes: 0 },
    { id: 3, name: 'Xiaomi 14 Ultra', description: 'Флагман Xiaomi', price: 449990, rating: 4.6, image: 'images/xiaomi-14.jpg', link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-8-gb-256-gb-chernyi-133335702/?c=750000000', categoryId: 1, likes: 0 },
    { id: 4, name: 'Google Pixel 8 Pro', description: 'Флагман Google', price: 399990, rating: 4.7, image: 'images/pixel-8.jpg', link: 'https://kaspi.kz/shop/p/google-pixel-7-pro-12-gb-128-gb-chernyi-107066141/?c=750000000', categoryId: 1, likes: 0 },
    { id: 5, name: 'OnePlus 12', description: 'Флагман OnePlus', price: 349990, rating: 4.5, image: 'images/oneplus-12.jpg', link: 'https://kaspi.kz/shop/p/oneplus-12', categoryId: 1, likes: 0 },



    
    { id: 6, name: 'MacBook Air M1', description: 'Ноутбук Apple', price: 369990, rating: 4.9, image: 'images/macbook-air.jpg', link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000', categoryId: 2, likes: 0 },
    { id: 7, name: 'ASUS ROG Strix G16', description: 'Игровой ноутбук', price: 449990, rating: 4.5, image: 'images/rog-strix.jpg', link: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-16-16-gb-ssd-1000-gb-dos-g614jv-n4071-90nr0c61-m005r0-109460263/?c=750000000', categoryId: 2, likes: 0 },
    { id: 8, name: 'Lenovo Legion 5 Pro', description: 'Игровой ноутбук', price: 399990, rating: 4.6, image: 'images/legion-5.jpg', link: 'https://kaspi.kz/shop/p/lenovo-legion-pro-5-16irx10-16-32-gb-ssd-1000-gb-bez-os-83nn001krk-142787523/?c=750000000', categoryId: 2, likes: 0 },
    { id: 9, name: 'HP Victus 16', description: 'Игровой ноутбук', price: 299990, rating: 4.4, image: 'images/hp-victus.jpg', link: 'https://kaspi.kz/shop/p/hp-victus', categoryId: 2, likes: 0 },
    { id: 10, name: 'Dell XPS 15', description: 'Премиум ноутбук', price: 549990, rating: 4.8, image: 'images/dell-xps.jpg', link: 'https://kaspi.kz/shop/p/dell-xps', categoryId: 2, likes: 0 },




    { id: 11, name: 'AirPods Pro 2', description: 'Наушники Apple', price: 98990, rating: 4.7, image: 'images/airpods-pro.jpg', link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000', categoryId: 3, likes: 0 },
    { id: 12, name: 'Sony WH-1000XM5', description: 'Наушники Sony', price: 129990, rating: 4.9, image: 'images/sony-xm5.jpg', link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000', categoryId: 3, likes: 0 },
    { id: 13, name: 'JBL Tune 760NC', description: 'Наушники JBL', price: 45990, rating: 4.5, image: 'images/jbl-760.jpg', link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-760nc-chernyi-102863031/?c=750000000', categoryId: 3, likes: 0 },
    { id: 14, name: 'Marshall Major IV', description: 'Наушники Marshall', price: 59990, rating: 4.6, image: 'images/marshall-4.jpg', link: 'https://kaspi.kz/shop/p/marshall-4', categoryId: 3, likes: 0 },
    { id: 15, name: 'Bose QC Ultra', description: 'Наушники Bose', price: 159990, rating: 4.8, image: 'images/bose-qc.jpg', link: 'https://kaspi.kz/shop/p/bose-qc', categoryId: 3, likes: 0 },


    

    { id: 16, name: 'iPad Pro 11"', description: 'Планшет Apple', price: 449990, rating: 4.9, image: 'images/ipad-pro.jpg', link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-2024-wi-fi-11-djuim-8-gb-256-gb-chernyi-119774227/?c=750000000', categoryId: 4, likes: 0 },
    { id: 17, name: 'Samsung Tab S9 FE', description: 'Планшет Samsung', price: 159990, rating: 4.6, image: 'images/tab-s9.jpg', link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-fe-wi-fi-10-9-djuim-6-gb-128-gb-seryi-132526020/?c=750000000', categoryId: 4, likes: 0 },
    { id: 18, name: 'Xiaomi Pad 6', description: 'Планшет Xiaomi', price: 129990, rating: 4.5, image: 'images/xiaomi-pad-6.jpg', link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-seryi-112453226/?c=750000000', categoryId: 4, likes: 0 },
    { id: 19, name: 'Huawei MatePad 11', description: 'Планшет Huawei', price: 149990, rating: 4.5, image: 'images/huawei-pad.jpg', link: 'https://kaspi.kz/shop/p/huawei-pad', categoryId: 4, likes: 0 },
    { id: 20, name: 'Lenovo Tab P12', description: 'Планшет Lenovo', price: 139990, rating: 4.4, image: 'images/lenovo-p12.jpg', link: 'https://kaspi.kz/shop/p/lenovo-p12', categoryId: 4, likes: 0 }
  ];

  getCategories() {
    return this.categories;
  }

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  likeProduct(productId: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) product.likes++;
  }

  deleteProduct(productId: number) {
    const index = this.products.findIndex(p => p.id === productId);
    if (index !== -1) this.products.splice(index, 1);
  }
}