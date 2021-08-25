import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headerOpts = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  headerOptsJSON = {
    'Content-Type': 'application/json',
  };

  httpOptions = {
    headers: new HttpHeaders(this.headerOpts),
  };

  httpOptionsJSON = {
    headers: new HttpHeaders(this.headerOptsJSON),
  };

  baseUrl = environment.api;

  constructor(
    public http: HttpClient,
  ) {
    const options: any = this.httpOptions;
  }
}
