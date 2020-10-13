import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { FormsModule } from '@angular/forms';
import { SavePatientModule } from './modals/save-patient/save-patient.module';
import { SavePatientComponent } from './modals/save-patient/save-patient.component';
import { DeletePatientModule } from './modals/delete-patient/delete-patient.module';
import { DeletePatientComponent } from './modals/delete-patient/delete-patient.component';
import { SaveAppointmentModule } from '../appointments/modals/save-appointment/save-appointment.module';
import { SaveAppointmentComponent } from '../appointments/modals/save-appointment/save-appointment.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SavePatientModule,
        SaveAppointmentModule,
        DeletePatientModule,
        PatientsRoutingModule
    ],
    declarations: [
        PatientsComponent
    ],
    entryComponents: [
        SavePatientComponent,
        DeletePatientComponent,
        SaveAppointmentComponent
    ]
})
export class PatientsModule {}
