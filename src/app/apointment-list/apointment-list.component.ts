import { Component, OnInit } from '@angular/core';
import { Appointmets } from '../models/appointmet';
import { FormsModule } from '@angular/forms'
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-apointment-list',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './apointment-list.component.html',
  styleUrl: './apointment-list.component.css'
})
export class ApointmentListComponent implements OnInit  {
  
  // appointment:AppointmetTs = {
  //   title: "Take dog for a walk",
  //   id: 1,
  //   date: new Date('03/11/2024')
  // }
  
  newAppointmentTitle : string = "";
  newAppointmentDate : Date = new Date();

  appointments: Appointmets[] = [];

  ngOnInit(): void {
    let saveAppointments = localStorage.getItem("appointment");
    this.appointments = saveAppointments ? JSON.parse(saveAppointments) : [];
   
  }

  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppoint : Appointmets = {
           id: Date.now(),
           title: this.newAppointmentTitle,
           date: this.newAppointmentDate
           
      }
      this.appointments.push(newAppoint);
      this.newAppointmentDate = new Date();
      this.newAppointmentTitle = ""; 
      localStorage.setItem("appointment", JSON.stringify(this.appointments));
    }
    // console.log('new apointment',this.appointments);
    // alert(this.appointments.length);
    
  }

  deleteAppointments(index:number) {
    this.appointments.splice(index,1);
    localStorage.setItem("appointment", JSON.stringify(this.appointments));

  }

}
