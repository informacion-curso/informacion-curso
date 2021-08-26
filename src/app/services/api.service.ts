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

  async getQuestions() {
    this.baseUrl = environment.api;
    try {
      const response = await this.http
        .get(`${this.baseUrl}/questions`, this.httpOptions)
        .toPromise();
      if (response) {
        return { status: true, data: response['records'] };
      } else {
        return {
          status: false,
          message: response['message']
            ? response['message']
            : 'Ha ocurrido un error al tratar de obtener las preguntas.',
        };
      }
    } catch (error) {
      if (error['error']) {
        return {
          status: false,
          message: error['error']['message']
            ? error['error']['message']
            : 'Ha ocurrido un error al tratar de obtener las preguntas.',
        };
      } else {
        return {
          status: false,
          message: 'Ha ocurrido un error al tratar de obtener las preguntas.',
        };
      }
    }
  }
}
