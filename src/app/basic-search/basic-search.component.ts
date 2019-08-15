import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {ValidationService} from '../validation.service';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-basic-search',
  templateUrl: './basic-search.component.html',
  styleUrls: ['./basic-search.component.css']
})
export class BasicSearchComponent implements OnInit  {


  basicSearchForm = this.fb.group({
  codeSearch: ['', [Validators.required, Validators.maxLength(4), ValidationService.codeNumberValidator]],
});

searchResults: any;

  constructor(private fb: FormBuilder, private api: ApiService ) { }

  ngOnInit() {  }

onSearch() {
  console.log(this.basicSearchForm.get('codeSearch').value);
  this.api.searchByCode(this.basicSearchForm.get('codeSearch').value).subscribe(
    data => {
      console.log(data);
      this.searchResults = data;
    }
  );
}

}
