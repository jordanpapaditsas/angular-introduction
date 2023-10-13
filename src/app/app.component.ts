import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';
import { PersonAltComponent } from './person-alt/person-alt.component';
import { EventBindComponent } from './event-bind/event-bind.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent, PersonAltComponent, EventBindComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Jordan';   // name = "Jordan" (same declaration)
  lastName = 'Papaditsas';

  person: Person = {
    givenName: 'Jordan',
    surName: 'Papaditsas',
    age: 32,
    email: 'jordPap@aueb.gr',
    address: 'Arg. 89'
  };

  person2: Person = {
    givenName: 'Panos',
    surName: 'Dimos',
    age: 32,
    email: 'padimos@aueb.gr',
    address: 'Naup.32'
  }

  
users: Person[] = [
  {
    givenName: 'John',
    surName: 'Doe',
    age: 30,
    email: 'john.doe@example.com',
    address: '123 Main St',
  },
  {
    givenName: 'Jane',
    surName: 'Doe',
    age: 28,
    email: 'jane.doe@example.com',
    address: '123 Main St',
  },
  {
    givenName: 'Jim',
    surName: 'Brown',
    age: 45,
    email: 'jim.brown@example.com',
    address: '456 Park Ave',
  },
  {
    givenName: 'Jill',
    surName: 'Brown',
    age: 42,
    email: 'jill.brown@example.com',
    address: '456 Park Ave',
  },
  {
    givenName: 'Jake',
    surName: 'Smith',
    age: 36,
    email: 'jake.smith@example.com',
    address: '789 Broadway',
  },
  {
    givenName: 'Judy',
    surName: 'Smith',
    age: 34,
    email: 'judy.smith@example.com',
    address: '789 Broadway',
  },
  {
    givenName: 'Jack',
    surName: 'Johnson',
    age: 50,
    email: 'jack.johnson@example.com',
    address: '321 Oak St',
  },
  {
    givenName: 'Julie',
    surName: 'Johnson',
    age: 48,
    email: 'julie.johnson@example.com',
    address: '321 Oak St',
  },
  {
    givenName: 'Jerry',
    surName: 'Davis',
    age: 55,
    email: 'jerry.davis@example.com',
    address: '654 Pine St',
  },
  {
    givenName: 'June',
    surName: 'Davis',
    age: 53,
    email: 'june.davis@example.com',
    address: '654 Pine St',
  },
]
}
