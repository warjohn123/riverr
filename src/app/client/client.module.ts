import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule,
        ClientRoutingModule
    ],
    declarations: [
        ClientComponent,
        HeaderComponent,
        SidebarComponent
    ]
})
export class ClientModule {}
