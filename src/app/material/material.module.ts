import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from "@angular/material/dialog";

const materialComponents = [
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule,
  MatToolbarModule,
  MatSelectModule,
  MatRadioModule,
  MatSnackBarModule,
  MatDialogModule
]

@NgModule({
  imports: [
    materialComponents,
  ],
  exports: [
    materialComponents
  ]
})
export class MaterialModule { }
