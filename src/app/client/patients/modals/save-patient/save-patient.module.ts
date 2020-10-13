import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { SavePatientComponent } from './save-patient.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule, NgbModalModule],
    declarations: [SavePatientComponent]
})
export class SavePatientModule {}
