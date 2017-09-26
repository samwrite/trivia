import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  registerUser(user) {
    return this._http.post('/register', user).map(data => data.json()).toPromise();
  }

  loginUser(user) {
    return this._http.post('/login', user).map(data => data.json()).toPromise();
  }

  getCurrentUser() {
    return this._http.get('/currentUser').map(data => data.json()).toPromise();
  }

  logout() {
    return this._http.get('/logout').map(data => data.json()).toPromise();
  }

  retrieveAll() {
    return this._http.get('/questions').map(data => data.json()).toPromise();
  }

  filterUsers(search) {
    return this._http.post('/users/search', search).map(data => data.json()).toPromise();
  }
  create(question) {
    return this._http.post('/question', question).map(data => data.json()).toPromise();
  }
}
