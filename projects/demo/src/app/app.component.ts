import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

import { GoogleAnalyticsService } from 'projects/library/src/lib/google-analytics.service';

@Component({
    selector: 'app-root',
    templateUrl: `./app.component.html`,
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

    constructor(private analytics: GoogleAnalyticsService) { }

}
