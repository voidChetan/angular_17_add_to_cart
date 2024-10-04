import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  isLoader: boolean = true;
  categoryList = ['Laptop', 'IPad', 'Moniter', 'Camera', 'Headphones','Mobile','Tablet'];
  productList = [
    { productId: 1, rating: 3, isOffer: false, productName: 'HP Notebook', category: 'Laptop', price: 10000, discount: 25, availableQty: 3, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp' },
    { productId: 2, rating: 1, isOffer: false, productName: 'HP Envy', category: 'Laptop', price: 1250, discount: 20, availableQty: 0, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp' },
    { productId: 3, rating: 2, isOffer: true, productName: 'Toshiba B77', category: 'Laptop', price: 34000, discount: 30, availableQty: 5, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp' },
    { productId: 4, rating: 5, isOffer: false, productName: 'HP I-Pad', category: 'IPad', price: 7600, discount: 5, availableQty: 0, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp' },
    { productId: 5, rating: 3, isOffer: true, productName: 'HP I-pad-Max', category: 'IPad', price: 5700, discount: 65, availableQty: 2, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/2.webp' },
    { productId: 6, rating: 1, isOffer: false, productName: 'I Wide Moniter', category: 'Moniter', price: 12360, discount: 23, availableQty: 8, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp' },
    { productId: 7, rating: 3, isOffer: true, productName: 'HP P-Series', category: 'Laptop', price: 34500, discount: 53, availableQty: 3, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/12.webp' },
    { productId: 8, rating: 2, isOffer: false, productName: 'Sony T-RT', category: 'Mobile', price: 23000, discount: 60, availableQty: 0, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/8.webp' },
    { productId: 9, rating: 5, isOffer: true, productName: 'Sony Camera', category: 'Camera', price: 43200, discount: 21, availableQty: 1, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/9.webp' },
    { productId: 10, rating: 1, isOffer: false, productName: 'Boat Max-250', category: 'Headphones', price: 3000, discount: 32, availableQty: 2, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/10.webp' },
    { productId: 11, rating: 2, isOffer: false, productName: 'Lenovo 32 Moniter', category: 'Moniter', price: 5700, discount: 24, availableQty: 4, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/14.webp' },
    { productId: 12, rating: 4, isOffer: true, productName: 'JBL 500', category: 'Headphones', price: 3560, discount: 54, availableQty: 7, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/15.webp' },
    { productId: 13, rating: 3, isOffer: false, productName: 'Samsung 012', category: 'Camera', price: 3200, discount: 62, availableQty: 2, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/16.webp' },
    { productId: 14, rating: 2, isOffer: false, productName: 'Dell Asp-343', category: 'Laptop', price: 67000, discount: 15, availableQty: 8, imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp' }
  ]
  filteredProducts: any []=[];
  selectedCategory: string = '';
  constructor(){
    setTimeout(() => {
      this.isLoader = false;
    }, 1000);
    this.filteredProducts =  this.productList;
  }

  filterCategor(category: string) {
    this.isLoader = true;
    if(this.selectedCategory == category) {
      this.selectedCategory = '';
      this.filteredProducts = this.productList;
    } else {
      this.selectedCategory = category;
      const products = this.productList.filter( prod=> prod.category == category);
      this.filteredProducts = products;
    } 
    setTimeout(() => {
      this.isLoader = false;
    }, 500);
  }
}
 