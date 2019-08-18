import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationComponent } from './validation/validation.component';

//Angular material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { ResultsComponent } from './results/results.component';

import {MatCardModule} from '@angular/material/card';
@NgModule({
  imports: [
    CommonModule, BrowserAnimationsModule, MatInputModule,MatCardModule
  ],
  declarations: [ValidationComponent, ResultsComponent],
   exports:[ValidationComponent, ResultsComponent]
})
export class SharedModule { }
