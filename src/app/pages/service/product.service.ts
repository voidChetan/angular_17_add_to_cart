import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  onAddToCart$: Subject<any> = new Subject();

  constructor() { }
}
