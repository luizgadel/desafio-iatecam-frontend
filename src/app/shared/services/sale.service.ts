import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Sale } from './models/sales.interface';

const API_URL = environment.mock_API_URL + '/sale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http: HttpClient) { }

  list() {
    var salesSubject = new BehaviorSubject<any[]>(null!);

    this.http.get<{sales: Sale[]}>(API_URL).subscribe({
      next: (data: any) => salesSubject.next(data.sales),
      error: (err) => console.log('Erro ao listar vendas:', err)
    })

    return salesSubject.asObservable();
  }
}
