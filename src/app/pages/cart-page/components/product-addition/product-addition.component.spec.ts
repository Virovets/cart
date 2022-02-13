import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAdditionComponent } from './product-addition.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ProductAdditionComponent', () => {
  let component: ProductAdditionComponent;
  let fixture: ComponentFixture<ProductAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ ProductAdditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new product', () => {
    const event = spyOn(component.addProduct, 'emit');
    component.productForm.patchValue({name: 'test', amount: '1', price: '10'});
    component.onAddProduct({name: 'test', amount: 1, price: 10});
    expect(event).toHaveBeenCalledWith({name: 'test', amount: 1, price: 10});
  });

  it('should not add a new product', () => {
    component.productForm.patchValue({name: '', amount: 1, price: 10});
    component.onAddProduct({name: '', amount: 1, price: 10});
    expect(component.productForm.valid).toEqual(false);
  });

  it('form should be not valid', () => {
    component.productForm.controls.name.setValue('sasd');
    component.productForm.controls.amount.setValue('');
    component.productForm.controls.price.setValue(1);
    expect(component.productForm.valid).toBeFalse();
  });
});
