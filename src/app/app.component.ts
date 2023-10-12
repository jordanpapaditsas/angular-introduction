import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Jordan';   // name = "Jordan" (same declaration)
  lastName = 'Papaditsas';

  person = {
    givenName: 'Jordan',
    surName: 'Papaditsas',
    age: 32,
    email: 'jordPap@aueb.gr'
  };
}
