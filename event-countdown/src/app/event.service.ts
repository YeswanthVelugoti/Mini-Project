import { Injectable } from '@angular/core';

export interface Event {
  name: string;
  date: Date;
}


@Injectable({
  providedIn: 'root'
})
export class EventService {

  events: Event[] = [];

  constructor() {}

  // Add a new event
  addEvent(event: Event) {
    this.events.push(event);
  }

  // Get all events
  getEvents(): Event[] {
    return this.events;
  }

  // Calculate the time left for an event
  getTimeLeft(eventDate: Date): string {
    const now = new Date();
    const timeDifference = eventDate.getTime() - now.getTime();
    
    if (timeDifference <= 0) {
      return 'Event has already passed';
    }

    const daysLeft = Math.floor(timeDifference / (1000 * 3600 * 24));
    const hoursLeft = Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600));
    const minutesLeft = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));
    
    return `${daysLeft} days, ${hoursLeft} hours, ${minutesLeft} minutes left`;
  }

}
