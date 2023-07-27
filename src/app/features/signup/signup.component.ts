import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/services/models/user.interface';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  form: FormGroup;
  isSubmitting = false;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { 
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      var user: User = {
        ...this.form.getRawValue(),
      };

      this.userService.create(user).subscribe({
        next: (userCreated) => {
          if (userCreated) {
            console.log('Usuário criado com sucesso.');
            this.isSubmitting = false;

            this.router.navigate(['login']);
          } else {
            console.log('Criando usuário...');
          }
        },
        error: (err) => {
          this.isSubmitting = false;
          console.log('Erro ao criar usuário: ', err);
        },
      });
    } else {
      this.isSubmitting = false;
      return;
    }
  }
}
