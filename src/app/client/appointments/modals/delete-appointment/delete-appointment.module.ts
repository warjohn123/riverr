import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteAppointmentComponent } from './delete-appointment.component';

@NgModule({
    imports: [CommonModule, NgbModalModule],
    declarations: [DeleteAppointmentComponent]
})
export class DeleteAppointmentModule {}
