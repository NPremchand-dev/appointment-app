import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApointmentListComponent } from "./apointment-list/apointment-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ApointmentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appointment-app';
}
