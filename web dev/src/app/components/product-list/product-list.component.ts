import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 15 Pro Max 256GB',
      description: 'Флагманский смартфон Apple с титановым корпусом, системой камер профессионального уровня и мощным процессором A17 Pro.',
      price: 649990,
      rating: 4.8,
      image: '/images/iphone-15.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-113138420/'
    },
    {
      id: 2,
      name: 'Ноутбук Apple MacBook Air 13 M1 256GB',
      description: 'Легкий и тонкий ноутбук с чипом Apple M1, безвентиляторным дизайном и до 18 часов работы от аккумулятора.',
      price: 369990,
      rating: 4.9,
      image: '/images/macbook-air.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m1-256gb-100797845/'
    },
    {
      id: 3,
      name: 'Наушники Apple AirPods Pro 2nd Generation',
      description: 'Беспроводные наушники с активным шумоподавлением, пространственным аудио и улучшенным временем автономной работы.',
      price: 98990,
      rating: 4.7,
      image: '/images/airpods-pro.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-114937444/'
    },
    {
      id: 4,
      name: 'Смарт-часы Apple Watch Series 9 45mm',
      description: 'Умные часы с дисплеем Always-On, расширенными функциями здоровья и фитнеса, и новым жестом двойного касания.',
      price: 189990,
      rating: 4.8,
      image: '/images/watch-series9.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-45mm-114942708/'
    },
    {
      id: 5,
      name: 'Планшет Samsung Galaxy Tab S9 FE 10.9" 128GB',
      description: 'Мощный планшет с IP68 защитой от воды и пыли, S Pen в комплекте и ярким дисплеем для работы и развлечений.',
      price: 159990,
      rating: 4.6,
      image: '/images/tab-s9.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-fe-10-9-128gb-114905119/'
    },
    {
      id: 6,
      name: 'Смартфон Samsung Galaxy S24 Ultra 256GB',
      description: 'Флагманский смартфон с AI-функциями, 200MP камерой и S Pen. Титан корпус и Snapdragon 8 Gen 3 процессор.',
      price: 499990,
      rating: 4.7,
      image: '/images/s24-ultra.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-256gb-116043556/'
    },
    {
      id: 7,
      name: 'Ноутбук игровой ASUS ROG Strix G16',
      description: 'Игровой ноутбук с мощным процессором Intel Core i9 и видеокартой NVIDIA RTX 4070. 16-дюймовый экран 240Hz.',
      price: 449990,
      rating: 4.5,
      image: '/images/rog-strix.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-11809025/'
    },
    {
      id: 8,
      name: 'Пылесос Dyson V15 Detect Absolute',
      description: 'Беспроводной пылесос с лазерной подсветкой, дисплеем и высокой мощностью всасывания. Автоматически увеличивает мощность.',
      price: 349990,
      rating: 4.9,
      image: '/images/dyson-v15.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-102274319/'
    },
    {
      id: 9,
      name: 'Телевизор LG OLED evo C3 65"',
      description: 'OLED телевизор с потрясающим качеством изображения, Smart TV и процессором α9 Gen6. Поддержка Dolby Vision и Atmos.',
      price: 599990,
      rating: 4.8,
      image: '/images/lg-oled.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/lg-oled65c3rla-65-123456789/'
    },
    {
      id: 10,
      name: 'Кофемашина DeLonghi Dinamica Plus',
      description: 'Автоматическая кофемашина с капучинатором, сенсорным управлением и 13 уровнями помола.',
      price: 399990,
      rating: 4.7,
      image: '/images/coffee-machine.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/delonghi-dinamica-plus-ecam-123456789/'
    }
  ];

  shareOnWhatsApp(product: Product) {
    const text = `${product.name} - ${product.price} ₸`;
    const url = `https://wa.me/?text=${encodeURIComponent(text + ' ' + product.link)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram(product: Product) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`;
    window.open(url, '_blank');
  }
}
