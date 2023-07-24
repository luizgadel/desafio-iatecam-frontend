import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';

export const LoginGuard = () => {
  const router = inject(Router);
  const userService = inject(UserService);

  if (userService.isLoggedIn()) {
    router.navigate(['home']);
    return false;
  }

  return true;
};
