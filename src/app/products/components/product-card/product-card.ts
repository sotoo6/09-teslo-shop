import { SlicePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@products/interfaces/product.interface';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [RouterLink, SlicePipe],
  templateUrl: './product-card.html',
})
export class ProductCard {

  product = input.required<Product>();

  imgUrl = computed(()=> {
    return `http://localhost:3000/api/files/product/${this.product().images[0]}`
  })
}
