import { Routes } from '@angular/router';
import { AuthComponent } from './component/auth/auth.component';
import { UserComponent } from './component/user/user.component';

export const routes: Routes = [
  { path: 'auth-component', component: AuthComponent },
  { path: 'user-component', component: UserComponent },
];
