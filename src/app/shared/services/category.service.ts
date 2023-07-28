import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from './models/category.interface';
import { environment } from 'src/environments/environment.prod';

const API_URL = environment.backend_API_URL + '/category'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {}

  list() {
    var categoriesSubject = new BehaviorSubject<Category[]>(null!);

    this.http.get<{categories: Category[]}>(API_URL).subscribe({
      next: (data) => categoriesSubject.next(data.categories),
      error: (err) => console.log('Erro ao listar categorias:', err)
    })

    return categoriesSubject.asObservable();
  }

  create(category: Category) {
    var categorySubject = new BehaviorSubject<Category>(null!);

    this.http.post<{category: Category}>(API_URL, category).subscribe({
      next: (data) => categorySubject.next(data.category),
      error: (err) => console.log('Erro ao criar categoria: ', err)
    })

    return categorySubject.asObservable();
  }
}
