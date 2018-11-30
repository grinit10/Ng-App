import { NgModule } from '@angular/core';
import {
  MatCheckboxModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatSelectModule,
  MatToolbarModule,
  MatCardModule,
  MatNativeDateModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule
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
    MatCardModule,
    MatNativeDateModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule,
    MatNativeDateModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class CustomMaterialModule {}
