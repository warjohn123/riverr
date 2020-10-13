import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModalModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { SaveAppointmentComponent } from './save-appointment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, NgbTimepickerModule, FormsModule, NgbModalModule],
    declarations: [SaveAppointmentComponent]
})
export class SaveAppointmentModule {}
