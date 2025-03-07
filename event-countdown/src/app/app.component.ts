import { Component } from '@angular/core';
import { EventComponent } from './event/event.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EventComponent], // Import the standalone component
  template: `<app-event></app-event>`, // Correct template syntax
})
export class AppComponent {}
