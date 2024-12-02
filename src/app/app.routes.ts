import { Routes } from '@angular/router';
import { AuthComponent } from './component/auth/auth.component';
import { UserComponent } from './component/user/user.component';
import { SignupComponent } from './component/signup/signup.component';
import { LikeButtonComponent } from './like-button/like-button.component';

export const routes: Routes = [
  { path: '', component: LikeButtonComponent },
  { path: 'auth-component', component: AuthComponent },
  { path: 'user-component', component: UserComponent },
  { path: 'signup-component', component: SignupComponent },
];
