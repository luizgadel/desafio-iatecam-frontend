import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './models/product.interface';
import { environment } from 'src/environments/environment.prod';

const API_URL = environment.backend_API_URL + '/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  list() {
    var productsSubject = new BehaviorSubject<any[]>(null!);

    this.http.get(API_URL).subscribe({
      next: (data: any) => productsSubject.next(data),
      error: (err) => console.log('Erro ao listar produtos:', err)
    })

    return productsSubject.asObservable();
  }

  create(product: Product) {
    var productSubject = new BehaviorSubject<Product>(null!);

    this.http.post<{ product: Product }>(API_URL, product).subscribe({
      next: (data) => productSubject.next(data.product),
      error: (err) => console.log('Erro ao criar produto: ', err)
    })

    return productSubject.asObservable();
  }
}
