import {Component} from 'angular2/core';
import {StateService} from '../common/state.service';

@Component({
    selector: 'about',
    templateUrl: 'app/about/about.component.html'
})
export class AboutComponent {
    title: string;
    body: string;
    message: string;

    constructor(public _StateService: StateService) { }

    ngOnInit() {
        this.title = 'About Page';
        this.body = 'This is the about page body';

        this.message = this._StateService.getMessage();
    }

    updateMessage(m: string): void {
        this._StateService.setMessage(m);
    }
}
