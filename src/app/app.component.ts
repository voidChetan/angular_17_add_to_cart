import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './pages/service/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  productService = inject(ProductService);
  isCartVisiable: boolean = false;
  cartItems: any []= [];
  totalAmount: number = 0;
  constructor() {
    this.productService.onAddToCart$.subscribe((res:any)=> {
      debugger;
      this.cartItems.unshift(res);
      this.calculateAmount();
    })
  }

  showCart() {
    this.isCartVisiable = !this.isCartVisiable;
  }
  getDiscountedPrice(product: any) {
    const totalValue = product.price * ( (100-product.discount) / 100 )
    return totalValue.toFixed(0);
  }

  calculateAmount() {
    this.totalAmount = 0;
    this.cartItems.forEach(product => {
      this.totalAmount = this.totalAmount +  this.totalAmount  + (product.price * ( (100-product.discount) / 100 ))
    }); 
  }

  removeProduct(index:number) {
    this.cartItems.splice(index,1)
    this.calculateAmount();
  }
}
