import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { Product } from '../interfaces/product-interface';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should delete product', () => {
    service.setProducts([{name: 'test', amount: 1, price: 10},{name: 'test2', amount: 12, price: 120}]);
    service.deleteProduct({name: 'test', amount: 1, price: 10});
    service.setProducts([{name: 'test2', amount: 12, price: 120}]);
    service.products$.subscribe((products: Product[]) => {
      expect(products).toEqual([{name: 'test2', amount: 12, price: 120}]);
    });
  });

  it('should add product', () => {
    service.setProducts([{name: 'test', amount: 1, price: 10}]);
    service.addProduct({name: 'test2', amount: 12, price: 120});
    service.setProducts([{name: 'test', amount: 1, price: 10}, {name: 'test2', amount: 12, price: 120}]);
    service.products$.subscribe((products: Product[]) => {
      expect(products).toEqual([{name: 'test', amount: 1, price: 10}, {name: 'test2', amount: 12, price: 120}]);
    });
  });

  it('should change product', () => {
    service.setProducts([{name: 'test', amount: 1, price: 10}]);
    service.setProducts([{name: 'test', amount: 20, price: 10}]);
    service.products$.subscribe((products: Product[]) => {
      expect(products).toEqual([{name: 'test', amount: 20, price: 10}]);
    });
  });
});
