import { Component, Injectable, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Appointment, FeeStatus } from 'src/app/shared/models/appointment.model';
import { AppointmentService } from 'src/app/shared/services/appointment.service';

import {NgbTimeStruct, NgbTimeAdapter} from '@ng-bootstrap/ng-bootstrap';
import { Patient } from 'src/app/shared/models/patient.model';

const pad = (i: number): string => i < 10 ? `0${i}` : `${i}`;

/**
 * Example of a String Time adapter
 */
@Injectable()
export class NgbTimeStringAdapter extends NgbTimeAdapter<string> {

  fromModel(value: string| null): NgbTimeStruct | null {
    if (!value) {
      return null;
    }
    const split = value.split(':');
    return {
      hour: parseInt(split[0], 10),
      minute: parseInt(split[1], 10),
      second: parseInt(split[2], 10)
    };
  }

  toModel(time: NgbTimeStruct | null): string | null {
    return time != null ? `${pad(time.hour)}:${pad(time.minute)}:${pad(time.second)}` : null;
  }
}

@Component({
    selector: 'app-save-appointment',
    templateUrl: './save-appointment.component.html',
    styleUrls: ['./save-appointment.component.scss'],
    providers: [{provide: NgbTimeAdapter, useClass: NgbTimeStringAdapter}]
})

export class SaveAppointmentComponent implements OnInit {

    @Input() appointmentObj: Appointment;
    @Input() patient: Patient;
    appointment: Appointment = {
        start_time: '',
        end_time: '',
        description: '',
        fee: 0,
        feeStatus: FeeStatus.UNPAID
    }
    isSaving: boolean = false;

    constructor(public activeModal: NgbActiveModal, 
        private toastr: ToastrService,
        private appointmentService: AppointmentService) {

    }

    ngOnInit() {
        if(this.appointmentObj) {
            this.appointment = this.appointmentObj;
        }
    }

    async save(appointment: Appointment) {
        this.isSaving = true;
        try {

            if(this.appointmentObj) {
                await this.appointmentService.update(appointment);
            } else {
                appointment.patient = this.patient;
                await this.appointmentService.add(appointment);
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