import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Dress {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  img: string;
  tag?: string;
  category: string;
  color: string;
}

@Component({
  selector: 'app-collection',
  imports: [CommonModule],
  templateUrl: './collection.html',
  styleUrl: './collection.css'
})
export class Collection {
  activeFilter = signal('All');

  filters = ['All', 'Evening', 'Casual', 'Formal', 'Summer', 'Sale'];

  wishlisted = new Set<number>();

  toggleWish(id: number) {
    this.wishlisted.has(id) ? this.wishlisted.delete(id) : this.wishlisted.add(id);
  }

  dresses: Dress[] = [
    { id:1,  name: 'Scarlet Evening Gown',    price: 289, img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=500&q=80', tag: 'New',         category: 'Evening', color: '#f9e6e6' },
    { id:2,  name: 'Azure Sundress',           price:  95, img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80', tag: 'Best Seller', category: 'Summer',  color: '#e6f0f9' },
    { id:3,  name: 'Champagne Midi Dress',     price: 178, img: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=500&q=80', tag: 'Trending',    category: 'Casual',  color: '#f9f3e6' },
    { id:4,  name: 'Ivory Lace Gown',          price: 345, img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=500&q=80', tag: 'Formal',      category: 'Formal',  color: '#f5f3ee' },
    { id:5,  name: 'Blush Wrap Dress',         price:  82, originalPrice: 120, img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=500&q=80', tag: 'Sale', category: 'Sale', color: '#fce8ec' },
    { id:6,  name: 'Sage Floral Sundress',     price:  99, img: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?auto=format&fit=crop&w=500&q=80', tag: 'New',         category: 'Summer',  color: '#e8f4e8' },
    { id:7,  name: 'Midnight Velvet Dress',    price: 265, img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=500&q=80', tag: 'Limited',     category: 'Evening', color: '#e6e6f4' },
    { id:8,  name: 'Terracotta Boho Dress',    price: 112, originalPrice: 160, img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=500&q=80', tag: 'Sale', category: 'Sale', color: '#f5ede6' },
    { id:9,  name: 'Pearl Formal Gown',        price: 398, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=500&q=80', tag: 'Exclusive',   category: 'Formal',  color: '#f5f2ef' },
    { id:10, name: 'Lemon Drop Mini',          price:  74, img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=500&q=80', tag: 'Fun',         category: 'Casual',  color: '#fdf8e1' },
    { id:11, name: 'Rose Garden Maxi',         price: 145, img: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=500&q=80', tag: '',            category: 'Summer',  color: '#fce8f0' },
    { id:12, name: 'Cobalt Blue Bodycon',      price: 128, originalPrice: 175, img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=500&q=80', tag: 'Sale', category: 'Sale', color: '#e6ecf9' },
  ];

  get filtered(): Dress[] {
    const f = this.activeFilter();
    return f === 'All' ? this.dresses : this.dresses.filter(d => d.category === f);
  }

  setFilter(f: string) {
    this.activeFilter.set(f);
  }
}
