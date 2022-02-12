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
  @Output() deleteProduct = new EventEmitter<Product>();
  @Output() amountChangeEmit = new EventEmitter<Product>();

  public onDeleteProduct(product: Product) {
    this.deleteProduct.emit(product);
  }

  amountChange(event: any, product: Product) {
    const copyProduct: Product = {
      name: product.name,
      amount: event.target.value,
      price: product.price
    };

    this.amountChangeEmit.emit(copyProduct);
  }
}
