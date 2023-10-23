import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Person } from './interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient = inject(HttpClient)) {}

  getAllUsers() {
    return this.http.get<Person[]>('http://localhost:3000/users');
  }

  getUserById(id: number) {
    return this.http.get<Person>(`http://localhost:3000/users/${id}`);
  }

  addUser(user: Person) {
    return this.http.post<Person>('http://localhost:3000/users', user);
  }
}
