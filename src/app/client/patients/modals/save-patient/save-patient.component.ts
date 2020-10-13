import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Patient } from 'src/app/shared/models/patient.model';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
    selector: 'app-save-patient',
    templateUrl: './save-patient.component.html',
    styleUrls: ['./save-patient.component.scss']
})

export class SavePatientComponent implements OnInit {

    @Input() patientObj: Patient;
    patient: Patient = {
        pet_name: '',
        pet_type: '',
        owner_name: '',
        owner_phone_number: ''
    }
    isSaving: boolean = false;

    constructor(public activeModal: NgbActiveModal, 
        private toastr: ToastrService,
        private patientService: PatientService) {

    }

    ngOnInit() {
        if(this.patientObj) {
            this.patient = this.patientObj;
        }
    }

    async save(patient) {
        this.isSaving = true;
        try {

            if(this.patientObj) {
                await this.patientService.update(patient);
            } else {
                await this.patientService.add(patient);
            }

            this.onSuccess();
        } catch(e) {
            this.onError();
        }
    }

    onSuccess() {
        this.isSaving = false;
        this.toastr.success('Success');
        this.activeModal.close();
    }

    onError() {
        this.isSaving = false;
        this.toastr.error('Something went wrong. Please try again');
    }

}