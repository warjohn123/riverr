import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
    selector: 'app-delete-patient',
    templateUrl: './delete-patient.component.html',
    styleUrls: ['./delete-patient.component.scss'],
    providers: [ToastrService]
})

export class DeletePatientComponent implements OnInit {

    @Input() patient;
    isSaving: boolean = false;

    constructor(public activeModal: NgbActiveModal, 
        private toastr: ToastrService,
        private patientService: PatientService) {

    }

    ngOnInit() {
        
    }

    async delete() {
        this.isSaving = true;
        try {
            await this.patientService.delete(this.patient);
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