import {Component} from 'angular2/core';
import {StateService} from '../common/state.service';

@Component({
  selector: 'home',
  templateUrl: 'app/home/home.component.html'
})
export class HomeComponent {
  title: string = 'Home Page';
  body:  string = 'This is the about home body';
  message: string;

  constructor(private _StateService: StateService) { }

  ngOnInit() {
    this.message = this._StateService.getMessage();
  }

  updateMessage(m: string): void {
    this._StateService.setMessage(m);
  }
}
