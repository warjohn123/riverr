import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AppointmentService } from 'src/app/shared/services/appointment.service';

@Component({
    selector: 'app-delete-appointment',
    templateUrl: './delete-appointment.component.html',
    styleUrls: ['./delete-appointment.component.scss'],
    providers: [ToastrService]
})

export class DeleteAppointmentComponent implements OnInit {

    @Input() appointment;
    isSaving: boolean = false;

    constructor(public activeModal: NgbActiveModal, 
        private toastr: ToastrService,
        private appointmentService: AppointmentService) {

    }

    ngOnInit() {
        
    }

    async delete() {
        this.isSaving = true;
        try {
            await this.appointmentService.delete(this.appointment);
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