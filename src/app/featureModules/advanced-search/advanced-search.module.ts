import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsearchComponent } from './adsearch/adsearch.component';
import { AdvancedModule } from './advanced.module';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

//service
import {ApiService} from '../../service/api.service';

@NgModule({
  imports: [
    CommonModule, AdvancedModule, MatAutocompleteModule, FormsModule, ReactiveFormsModule, MatFormFieldModule , MatInputModule
  ],
  declarations: [AdsearchComponent],
  providers : [ApiService],
  exports : [AdsearchComponent]
})
export class AdvancedSearchModule { }
