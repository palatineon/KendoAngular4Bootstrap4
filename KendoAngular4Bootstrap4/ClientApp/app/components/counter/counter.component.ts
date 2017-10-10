import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html',
    styleUrls: ['../../../../node_modules/@progress/kendo-theme-bootstrap/dist/all.css'],

    // prevent style encapsulation
    encapsulation: ViewEncapsulation.None
})
export class CounterComponent {
    public currentCount = 0;

    public onButtonClick() {
        this.currentCount++;
    }

    public incrementCounter() {
        this.currentCount++;
    }

    public decrementCounter() {
        this.currentCount--;
    }
}
