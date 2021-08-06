import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAllShoes() {
    return this.http.get('/api/allShoes')
  }

  getThisShoe(shoe) {
    return this.http.post('/api/getShoe', shoe)
  }

  registerUser(user) {
    return this.http.post('/api/register', user)
  }
}
