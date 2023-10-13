import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent],
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
}
