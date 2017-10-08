import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppModuleShared } from './app.module.shared';
import { AppComponent } from './components/app/app.component';

var my_jquery = require('jquery/dist/jquery');
var my_popper = require('popper.js/dist/umd/popper');
var my_bootstrap = require('bootstrap/dist/js/bootstrap');

// Imports the Button module
import { ButtonModule } from '@progress/kendo-angular-buttons';

// Imports the ButtonGroup module
import { ButtonGroupModule } from '@progress/kendo-angular-buttons';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        BrowserModule, BrowserAnimationsModule,
        AppModuleShared,

        ButtonModule, ButtonGroupModule
    ],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl }
    ]
})
export class AppModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
