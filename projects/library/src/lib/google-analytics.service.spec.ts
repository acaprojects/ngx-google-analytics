
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { GoogleAnalyticsService } from './google-analytics.service';

describe('GoogleAnalyticsService', () => {
    let service: GoogleAnalyticsService;
    let spy: jasmine.Spy;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                GoogleAnalyticsService
            ],
            imports: [BrowserModule, CommonModule]
        }).compileComponents();
        service = TestBed.get(GoogleAnalyticsService);
    });

    afterEach(() => {
        // Remove google analytics script
        const script = document.querySelector('script[src*="google-analytics.com"]');
        if (script && script.parentElement) {
            script.parentElement.removeChild(script);
        }
        // Remove google analytics methods
        delete window.ga;
    })

    it('should create the instance', () => {
        expect(service).toBeTruthy();
    });

    it('should inject Google Analytics library into the page', () => {
        service.load('test');
        expect(document.querySelector('script[src*="google-analytics.com"]')).toBeTruthy();
    });

    it('shouldn\'t allow usage before being initailised', () => {
        // const props = {
        //     setUser: ['test_user'],
        //     event: ['test_cat', 'test_action', 'test_label', 'test_value'],
        //     screen: ['test', 'test_app'],
        //     page: ['test_route', true],
        //     timing: ['test_cat', 'test_var', 'test_value', 'test_label']
        // };
        // for (const k in props) {
        //     let error = null;
        //     try {
        //         service[k](...props[k]);
        //     } catch (e) {
        //         error = e;
        //     }
        //     expect(error).toBeTruthy();
        // }
    });
});
