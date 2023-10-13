import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../interfaces/person';

@Component({
  selector: 'app-person-alt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-alt.component.html',
  styleUrls: ['./person-alt.component.css']
})
export class PersonAltComponent {
  @Input() person: Person | undefined
}
