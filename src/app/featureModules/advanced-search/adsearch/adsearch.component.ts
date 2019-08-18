import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/api.service';

import {FormBuilder, Validators} from '@angular/forms';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-adsearch',
  templateUrl: './adsearch.component.html',
  styleUrls: ['./adsearch.component.css']
})
export class AdsearchComponent implements OnInit {

  states: any = [];
  districts : any =[];
  stateId : number;
  districtId : number;
  result : any;

  advancedSearchForm = this.fb.group({
    stateControl: ['', [Validators.required]],
    districtControl: [''],
  });

  
  filteredDistricts: Observable<string[]>;
  filteredStates: Observable<string[]>;

  constructor(private api: ApiService, private fb: FormBuilder) {
    this.advancedSearchForm.get('districtControl').disable();
   }



  ngOnInit() {
    this.filteredStates = this.advancedSearchForm.get('stateControl').valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value,this.states))
    );



    this.api.getStates().subscribe(
      data  => {
        console.log(data);
        this.states = data;
      }
    );

   

  }

  private pickNames(values : any){
   let res = [];
   for (let value of values) {
    res.push(value.Name)
  }
  return res;
  }

  private _filter(value: string,op): string[] {
    console.log('Value---'+ value);
    const filterValue = value.toLowerCase();
    console.log('Filtering---'+ op.filter(option => option.Name.toLowerCase().includes(filterValue)))
    return op.filter(option => option.Name.toLowerCase().includes(filterValue));
  }

  private getIds(name,sd){
    let id = 0;
 
      for (let state of sd) {
        console.log(state.Name.toLowerCase()+'----States--'+name.toLowerCase());
        if(name.toLowerCase() == state.Name.toLowerCase()){
          id = state.Id;
        }
      }
    
    
    return id;
  }

  private getFilteredDistricts(name){
    
    let id = this.getIds(name, this.states);
    this.stateId = id;
    this.api.getDistricts(id).subscribe(data => {
        this.districts = data;
        this.advancedSearchForm.get('districtControl').enable();

        this.filteredDistricts = this.advancedSearchForm.get('districtControl').valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value,this.districts))
        );

    });

  }

  private onSearch(){
    this.districtId = this.getIds(this.advancedSearchForm.get('districtControl').value,this.districts);

    if(this.stateId && this.districtId){
      this.api.searchByStateAndDis(this.stateId,this.districtId).subscribe(
        data => {console.log(data);
        this.result = data;}
      )
    }
    else{
      this.api.searchByStateId(this.stateId).subscribe(
        data => {console.log(data)
        this.result= data;}
      )
    }

  }
}
