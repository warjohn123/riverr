import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

    pushRightClass: string;
    showMenu: string;
    @Output() collapsedEvent = new EventEmitter<boolean>();

    constructor(private router: Router, ) {}

    ngOnInit() {
        this.showMenu = '';
        this.pushRightClass = 'push-right';
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
  
}