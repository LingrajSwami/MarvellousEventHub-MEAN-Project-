import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-events',
  standalone: true,
  templateUrl: './events.component.html',
  imports: [RouterLink, RouterOutlet, ReactiveFormsModule, CommonModule]
})
export class EventsComponent implements OnInit {

  events: any[] = []
  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this._eventService.getEvents()
      .subscribe(
        res => this.events = res,
        err => console.log(err)
      )
  }
}
