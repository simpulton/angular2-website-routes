import {Component, OnInit} from 'angular2/core';
import {StateService} from '../common/state.service';

@Component({
  selector: 'about',
  templateUrl: 'app/about/about.component.html'
})
export class AboutComponent implements OnInit{
  title: string = 'About Page';
  body:  string = 'This is the about page body';
  message: string;

  constructor(public _stateService: StateService) { }

  ngOnInit() {
    this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
