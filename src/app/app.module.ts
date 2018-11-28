import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { CockpitComponent } from './inputExample/cockpit/cockpit.component';
import { ChildComponentComponent } from './inputExample/child-component/child-component.component';
import { ParentComponentComponent } from './inputExample/parent-component/parent-component.component';

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
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
