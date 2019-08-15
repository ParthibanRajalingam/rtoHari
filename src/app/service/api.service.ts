import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { urls, getUrls } from '../config/serviceUrls';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

getStates() {
return this.http.get(getUrls('getAllState'));
}

getDistricts(id) {
  console.log('updated--' + getUrls('getDistrictById', id));
  return this.http.get(getUrls('getDistrictById', id));
}

searchByCode(id) {
  return this.http.get(getUrls('searchByReg', id));
}

}
