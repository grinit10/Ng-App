import { UserComponent } from './RouterExample/user/user.component';
import { UsersComponent } from './RouterExample/users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './RouterExample/home/home.component';
import { AboutComponent } from './RouterExample/about/about.component';
import { ParentComponentComponent } from './ServiceExample/parent-component/parent-component.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'about', component: AboutComponent, data: { title: 'About' } },
  { path: 'servers', component: ParentComponentComponent, data: { title: 'Server Management' } },
  { path: 'servers/:id/edit', component: ParentComponentComponent, data: { title: 'Server Edit' } },
  { path: 'users', component: UsersComponent, data: { title: 'Users' } },
  { path: 'users/:id', component: UserComponent, data: { title: 'User' } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
