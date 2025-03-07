import { Component, OnInit } from '@angular/core';
import { Event, EventService } from '../event.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event',
  imports: [FormsModule,CommonModule],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events: Event[] = [];
  eventName: string = '';
  eventDate: string = '';
  countdown: string = '';

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  // Add a new event
  addEvent() {
    if (this.eventName && this.eventDate) {
      const newEvent: Event = {
        name: this.eventName,
        date: new Date(this.eventDate),
      };
      this.eventService.addEvent(newEvent);
      this.events = this.eventService.getEvents();
      this.eventName = '';
      this.eventDate = '';
    }
  }

    // Calculate the time left for each event
    getTimeLeft(eventDate: Date): string {
      return this.eventService.getTimeLeft(eventDate);
    }
  
}
