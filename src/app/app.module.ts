import { AppRoutingModule } from './app.routing.module';
import { LoggingService } from './shared/services/logging/logging.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { CockpitComponent } from './RouterExample/cockpit/cockpit.component';
import { ChildComponentComponent } from './RouterExample/child-component/child-component.component';
import { ParentComponentComponent } from './RouterExample/parent-component/parent-component.component';
import { ServersService } from './shared/services/servers/servers.service';
import { HomeComponent } from './RouterExample/home/home.component';
import { AboutComponent } from './RouterExample/about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UserComponent } from './RouterExample/user/user.component';
import { UsersComponent } from './RouterExample/users/users.component';
import { UsereditComponent } from './RouterExample/useredit/useredit.component';

// const appRoutes: Routes = [
//   { path: '', component: HomeComponent, data: { title: 'Home' } },
//   { path: 'about', component: AboutComponent, data: { title: 'About' } },
//   { path: 'servermanagement', component: ParentComponentComponent, data: { title: 'Server Management' } }
// ];

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ChildComponentComponent,
    ParentComponentComponent,
    HomeComponent,
    AboutComponent,
    NavigationComponent,
    UserComponent,
    UsersComponent,
    UsereditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LoggingService, ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
