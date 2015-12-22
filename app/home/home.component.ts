import {Component} from 'angular2/core';
import {StateService} from '../common/state.service';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.component.html'
})
export class HomeComponent {
    title: string;
    body: string;
    message: string;

    constructor(public _StateService: StateService) { }

    ngOnInit() {
        this.title = 'Home Page';
        this.body = 'This is the about home body';

        this.message = this._StateService.getMessage();
    }

    updateMessage(m: string): void {
        this._StateService.setMessage(m);
    }
}
