import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationComponent } from './validation/validation.component';

//Angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule, BrowserAnimationsModule, MatInputModule
  ],
  declarations: [ValidationComponent],
   exports:[ValidationComponent]
})
export class SharedModule { }
