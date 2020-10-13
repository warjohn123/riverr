import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DeletePatientComponent } from './delete-patient.component';

@NgModule({
    imports: [CommonModule, NgbModalModule],
    declarations: [DeletePatientComponent]
})
export class DeletePatientModule {}
