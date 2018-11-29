import { LoggingService } from './ServiceExample/services/logging/logging.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { CockpitComponent } from './ServiceExample/cockpit/cockpit.component';
import { ChildComponentComponent } from './ServiceExample/child-component/child-component.component';
import { ParentComponentComponent } from './ServiceExample/parent-component/parent-component.component';
import { ServersService } from './ServiceExample/services/servers/servers.service';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ChildComponentComponent,
    ParentComponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule
  ],
  providers: [LoggingService, ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
