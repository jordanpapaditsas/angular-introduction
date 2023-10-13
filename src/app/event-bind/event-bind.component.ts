import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-bind',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent {
  times: number = 0;
  userInput: string = '';

  increaseCounter() {
    this.times += 1;
  }

  resetCounter() {
    this.times = 0;
  }

  onUserInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.userInput = target.value;
  }
}
