import { Component, ViewContainerRef, ViewEncapsulation, OnInit } from '@angular/core';

import { AppService } from './services/app.service';
import { GoogleAnalyticsService } from '../../lib/src/services/google-analytics.service';

import * as day_api from 'dayjs';
const dayjs = day_api;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

    constructor(private service: AppService, private analytics: GoogleAnalyticsService) { }

    public ngOnInit(): void {
        
    }

}
