import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';

const routes: Routes = [
    {
        path: '',
        component: ClientComponent,
        children: [
            {
                path: 'patients',
                loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule)
            },
            {
                path: 'appointments',
                loadChildren: () => import('./appointments/appointments.module').then(m => m.AppointmentsModule)
            },
            { path: '', redirectTo: '/patients', pathMatch: 'full'},
        ]
    }
];

@NgModule({ 
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule {}