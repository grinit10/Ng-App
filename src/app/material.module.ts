import { NgModule } from '@angular/core';
import {
  MatCheckboxModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatSelectModule,
  MatToolbarModule,
  MatCardModule
} from '@angular/material';


@NgModule({
  imports: [
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule
  ],
})
export class CustomMaterialModule { }
