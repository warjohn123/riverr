import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Appointment } from 'src/app/shared/models/appointment.model';
import { Patient } from 'src/app/shared/models/patient.model';
import { AppointmentService } from 'src/app/shared/services/appointment.service';
import { PatientService } from 'src/app/shared/services/patient.service';
import { DeleteAppointmentComponent } from './modals/delete-appointment/delete-appointment.component';
import { SaveAppointmentComponent } from './modals/save-appointment/save-appointment.component';

@Component({
    selector: 'app-appointments',
    templateUrl: './appointments.component.html',
    styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

    appointments: Appointment[] = [];
    allAppointments: Appointment[] = [];
    patients: Patient[] = [];
    selectedPatient:string = 'all';

    constructor(private modalService: NgbModal, 
        private patientService: PatientService,
        private appointmentService: AppointmentService) {

    }

    ngOnInit() {
        this.getAppointments();
        this.getPatients();
    }

    changePatient(patientId) {
        console.log('patient', patientId);
        if(patientId != 'all') {
            this.appointments = this.allAppointments.filter(item => item.patient._id == patientId);
        } else {
            this.appointments = this.allAppointments;
        }
    }

    edit(appointment) {
        const modalRef = this.modalService.open(SaveAppointmentComponent);
        modalRef.componentInstance.appointmentObj = {...appointment};
        modalRef.componentInstance.patient = appointment.patient;

        modalRef.result.then( () => {
            this.getAppointments();
        }).catch( () => {});
    }

    delete(appointment) {
        const modalRef = this.modalService.open(DeleteAppointmentComponent);
        modalRef.componentInstance.appointment = appointment;

        modalRef.result.then( () => {
            this.getAppointments();
        }).catch( () => {});
    }

    async getPatients() {
        try {
            this.patients = await this.patientService.list();
        } catch(e) {

        }
    }

    async getAppointments() {
        try {
            this.appointments = await this.appointmentService.list();
            this.allAppointments = [...this.appointments];
        } catch(e) {

        }
    }

}