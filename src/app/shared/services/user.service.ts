import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './models/user.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { environment } from 'src/environments/environment.prod';
import { MessageService } from 'primeng/api'
import { Router } from '@angular/router';

const JWT_TOKEN = 'token';
const USER_ID = 'user_id';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = `${environment.backend_API_URL}`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private router: Router,
  ) { }

  getJwtToken() {
    return localStorage.getItem(JWT_TOKEN);
  }

  isLoggedIn() {
    return this.getJwtToken();
  }

  authenticate(user: User) {
    var loginSubject = new BehaviorSubject<Boolean>(null!);

    this.http.post<User>(`${this.API_URL}/authenticate`, user)
    .subscribe({
      next: (res) => {
        localStorage.setItem(USER_ID, res.userId);
        this.storeToken(res.name);
        loginSubject.next(true);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
        this.messageService.add({
          severity: 'error',
          detail: 'Email ou senha incorretos',
        })
        loginSubject.next(false);
      }
    })

    return loginSubject.asObservable();
  }

  private storeToken(token: string) {
    localStorage.setItem(JWT_TOKEN, token);
  }

  logout() {
    if (this.isLoggedIn()) {
      this.removeToken();
      this.router.navigate(['login'])
    }
  }

  private removeToken() {
    localStorage.removeItem(JWT_TOKEN);
  }

  create(user: User) {
    var usersSubject = new BehaviorSubject<User>(null!);

    this.http.post<User>(`${this.API_URL}/user`, user)
    .subscribe({
      next: (data) => usersSubject.next(data),
      error: (err) => console.log('Erro ao criar usuário: ', err),
    });

    return usersSubject.asObservable();
  }

}
