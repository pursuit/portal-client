import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegistration } from './user-registration';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  _url = 'http://127.0.0.1:5002/users';
  constructor(private _http: HttpClient) { }

  register(registration: UserRegistration) {
    return this._http.post<any>(this._url, registration);
  }
}
