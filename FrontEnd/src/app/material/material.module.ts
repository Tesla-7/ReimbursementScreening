import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

// As someone who has never used angular before, I would just like to say that the Materials feature is one of my favorite things in the world now.
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatFormFieldModule, MatDatepickerModule, MatButtonModule, MatNativeDateModule, MatInputModule, FormsModule
  ]
})
export class MaterialModule { }
