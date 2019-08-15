import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/api.service';

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

  stateControl = new FormControl();
  districtControl = new FormControl();

  filteredOptions: Observable<string[]>;
  filteredStates: Observable<string[]>;
  constructor(private api: ApiService) { }

  ngOnInit() {


    this.filteredStates = this.stateControl.valueChanges
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

    // this.api.getDistricts(2).subscribe(
    //   data => {
    //     this.districts = data;
    //     console.log(data);
    //   }
    // );
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
    if(sd == 's'){
      for (let state of this.states) {
        console.log(state.Name.toLowerCase()+'----States--'+name.toLowerCase());
        if(name.toLowerCase() == state.Name.toLowerCase()){
          id = state.Id;
        }
      }
    }
    else{
      for (let district of this.districts) {
        if(name.toLowerCase() === district.Name.toLowerCase()){
          id = district.Id;
        }
      }
    }
    return id;
  }

  private getFilteredDistricts(name){
    let id = this.getIds(name, 's');
    this.api.getDistricts(id).subscribe(data => {
        this.districts = data;
    });
  }
}
