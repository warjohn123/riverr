import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsComponent } from './appointments.component';
import { FormsModule } from '@angular/forms';
import { DeleteAppointmentComponent } from './modals/delete-appointment/delete-appointment.component';
import { DeleteAppointmentModule } from './modals/delete-appointment/delete-appointment.module';
import { SaveAppointmentModule } from './modals/save-appointment/save-appointment.module';
import { SaveAppointmentComponent } from './modals/save-appointment/save-appointment.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DeleteAppointmentModule,
        SaveAppointmentModule,
        AppointmentsRoutingModule
    ],
    declarations: [
        AppointmentsComponent
    ],
    entryComponents: [
        DeleteAppointmentComponent,
        SaveAppointmentComponent
    ]
})
export class AppointmentsModule {}
