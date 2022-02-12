import { Component, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../../../core/services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../../../core/interfaces/product-interface';

@Component({
  selector: 'app-product-addition',
  templateUrl: './product-addition.component.html',
  styleUrls: ['./product-addition.component.scss']
})
export class ProductAdditionComponent {

  @Output() addProduct = new EventEmitter<Product>();
  public productForm: FormGroup;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder
    ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      price: ['', [Validators.required]]
    })
  }

  onAddProduct() {
    if (this.productForm.invalid) {
      Object.values(this.productForm.controls).forEach((control) => control.markAsTouched());
      return;
    }
    this.addProduct.emit(this.productForm.value);
  }

  public get pf() {
    return this.productForm.controls;
  }

}
