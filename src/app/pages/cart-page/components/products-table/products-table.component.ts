import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../core/interfaces/product-interface';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent {
  @Input() fullPrice: number = 0;
  @Input() products: Product[] = [];
  @Output() deleteProduct: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() amountChangeEmit: EventEmitter<Product> = new EventEmitter<Product>();

  public onDeleteProduct(product: Product) {
    this.deleteProduct.emit(product);
  }

  public onAmountChange(event: Event, product: Product) {
    const changedProduct: Product = {
      name: product.name,
      amount: +(event.target as HTMLInputElement).value,
      price: product.price
    };

    this.amountChangeEmit.emit(changedProduct);
  }
}
