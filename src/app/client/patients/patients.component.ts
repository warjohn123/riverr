import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Patient } from 'src/app/shared/models/patient.model';
import { PatientService } from 'src/app/shared/services/patient.service';
import { SaveAppointmentComponent } from '../appointments/modals/save-appointment/save-appointment.component';
import { DeletePatientComponent } from './modals/delete-patient/delete-patient.component';
import { SavePatientComponent } from './modals/save-patient/save-patient.component';

@Component({
    selector: 'app-patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

    patients: Patient[] = [];

    constructor(private modalService: NgbModal, private patientService: PatientService) {

    }

    ngOnInit() {
        this.getPatients();
    }

    add() {
        const modalRef = this.modalService.open(SavePatientComponent);

        modalRef.result.then( () => {
            this.getPatients();
        }).catch( () => {});
    }

    edit(patient) {
        const modalRef = this.modalService.open(SavePatientComponent);
        modalRef.componentInstance.patientObj = {...patient};

        modalRef.result.then( () => {
            this.getPatients();
        }).catch( () => {});
    }

    delete(patient) {
        const modalRef = this.modalService.open(DeletePatientComponent);
        modalRef.componentInstance.patient = patient;

        modalRef.result.then( () => {
            this.getPatients();
        }).catch( () => {});
    }

    async getPatients() {
        try {
            this.patients = await this.patientService.list();
        } catch(e) {

        }
    }

    addAppointment(patient) {
        const modalRef = this.modalService.open(SaveAppointmentComponent);
        modalRef.componentInstance.patient = patient;
    }

}