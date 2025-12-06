import { Routes } from '@angular/router';

import { MediaListComponent } from './pages/media-list/media-list';
import { MediaAddComponent } from './pages/media-add/media-add';
import { MediaEditComponent } from './pages/media-edit/media-edit';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';

export const routes: Routes = [
  { path: '', component: MediaListComponent },
  { path: 'media/add', component: MediaAddComponent },
  { path: 'media/edit/:id', component: MediaEditComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contactus', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];
