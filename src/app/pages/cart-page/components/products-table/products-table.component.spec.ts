import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTableComponent } from './products-table.component';

describe('ProductsTableComponent', () => {
  let component: ProductsTableComponent;
  let fixture: ComponentFixture<ProductsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsTableComponent);
    component = fixture.componentInstance;
    component.products = [{name: 'test', amount: 1, price: 10}];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('click on Delete Product', () => {
    const event = spyOn(component.deleteProduct, 'emit');
    component.onDeleteProduct({name: 'test', amount: 1, price: 10});
    expect(event).toHaveBeenCalledWith({name: 'test', amount: 1, price: 10});
  });
});
