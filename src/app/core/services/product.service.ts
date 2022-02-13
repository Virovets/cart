import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  public products$ = this._products$.asObservable();

  addProduct(product: Product) {
    this.setProducts([...this._products$.getValue(), product]);
  }

  deleteProduct(data: Product) {
    const products: Product[] = this._products$.getValue();
    products.forEach((item, index) => {
      if (item === data) { products.splice(index, 1); }
    });

    this.setProducts(products);
  }

  setProducts(products: Product[]) {
    this._products$.next(products);
  }
}
