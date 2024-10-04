import { Component, Input, inject } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input ()  product: any;

  productService = inject(ProductService);

  getDiscountedPrice(product: any) {
    const totalValue = product.price * ( (100-product.discount) / 100 )
    return totalValue.toFixed(0);
  }

  addToCart(productData: any) {
    debugger;
    this.productService.onAddToCart$.next(productData);
  }

}
