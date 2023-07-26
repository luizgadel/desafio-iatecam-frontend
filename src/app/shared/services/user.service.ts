import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './models/user.interface';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.prod';

const JWT_TOKEN = 'token';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedInUsers = new BehaviorSubject<User>(null!);

  constructor(
    private http: HttpClient
  ) { }

  getJwtToken() {
    return localStorage.getItem(JWT_TOKEN);
  }

  isLoggedIn() {
    return this.getJwtToken();
  }

  authenticate(email: string, password: string) {
    this.list().subscribe({
      next: (users) => {
        if (users != null) {
          var user = users.find(
            (u) => u.email == email && u.password == password
          );

          if (user != undefined) {
            this.loggedInUsers.next(user);
          }
        }
      }
    })

    return this.loggedInUsers.asObservable();
  }

  list() {
    var usersSubject = new BehaviorSubject<User[]>(null!);

    this.http.get<{ users: User[] }>(environment.backend_API_URL + '/').subscribe({
      next: (data) => usersSubject.next(data.users),
      error: (err) => console.log('Erro ao listar usuários:', err),
    });

    return usersSubject.asObservable();
  }


}
