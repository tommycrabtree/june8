import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.baseUrl + 'users')
  }
}
