import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { takeUntil } from 'rxjs/operators';
import { Product } from '../../core/interfaces/product-interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit, OnDestroy {
  private destroy$: Subject<any> = new Subject();
  public products: Product[] = [];
  public fullPrice: number = 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts() {
    this.productService.products$.pipe(takeUntil(this.destroy$))
      .subscribe((products: Product[]) => {
        this.products = products;
        let summ = 0;
        for(const item of products) {
          summ += (item.price * item.amount)
        }
        this.fullPrice = summ;
      })
  }

  public onDeleteProduct(product: Product) {
    this.productService.deleteProduct(product);
  }

  public onAddProduct(product: Product) {
    const filterProducts = this.products.filter(item => item.name === product.name);
    if (filterProducts.length) {
      return;
    }
    this.productService.addProduct(product);
  }

  public onChangeProduct(product: Product) {
    const newProducts: Product[] = this.products.map((item: Product) => {
      if (item.name === product.name) {
        return product;
      }
      return item;
    });
    this.productService.setProducts(newProducts);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
