import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactService {

  constructor(private _http: HttpClient) { }

  sendMessage(body) {
    return this._http.post('', body);
  }

}

