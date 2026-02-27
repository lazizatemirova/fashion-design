import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  wishlisted = new Set<string>();

  toggleWish(name: string) {
    this.wishlisted.has(name) ? this.wishlisted.delete(name) : this.wishlisted.add(name);
  }

  categories = [
    { name: 'Evening Gowns',  count: 24, img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80', tag: 'Formal' },
    { name: 'Summer Dresses', count: 38, img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80', tag: 'Casual' },
    { name: 'Midi Dresses',   count: 19, img: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=600&q=80', tag: 'Trending' },
  ];

  featured = [
    { name: 'Rose Bloom Gown',    price: 189, img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=500&q=80', tag: 'New',         color: '#f4c5c5' },
    { name: 'Golden Hour Midi',   price: 134, img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=500&q=80', tag: 'Best Seller', color: '#f9e8c8' },
    { name: 'Velvet Dreams',      price: 224, img: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?auto=format&fit=crop&w=500&q=80', tag: 'Limited',     color: '#d4c5e8' },
    { name: 'Ivory Grace Dress',  price: 156, img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=500&q=80', tag: 'New',         color: '#e8e4dc' },
  ];
}
