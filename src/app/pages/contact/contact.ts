import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  submitted = signal(false);
  loading = signal(false);

  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false);
      this.submitted.set(true);
    }, 1200);
  }

  reset() {
    this.submitted.set(false);
    this.form = { name: '', email: '', subject: '', message: '' };
  }
}
