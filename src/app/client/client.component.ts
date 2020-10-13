import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

    collapedSideBar: boolean;
    loading: Boolean = true;

    constructor(private router: Router) {
        router.events.subscribe((event: RouterEvent) => {
            this.navigationInterceptor(event)
        })
    }

    ngOnInit() {
        
    }

    receiveCollapsed($event) {
        console.log('event', $event);
        this.collapedSideBar = $event;
    }

    // Shows and hides the loading spinner during RouterEvent changes
    navigationInterceptor(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
            this.loading = true
        }
        if (event instanceof NavigationEnd) {
            this.loading = false
        }

        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof NavigationCancel) {
            this.loading = false
        }
        if (event instanceof NavigationError) {
            this.loading = false
        }
    }
}