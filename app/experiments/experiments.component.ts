import {Component, OnInit} from '@angular/core';
import {NgFor} from '@angular/common';
import {Experiment} from '../common/experiment.model';
import {ExperimentsService} from '../common/experiments.service';
import {StateService} from '../common/state.service';
import {ExperimentDetailComponent} from './experiment-details/experiment.detail.component';

@Component({
  selector: 'experiments',
  template: require('./experiments.component.html'),
  directives: [ExperimentDetailComponent]
})
export class ExperimentsComponent implements OnInit {
  title: string = 'Experiments Page';
  body: string = 'This is the about experiments body';
  message: string;
  experiments: Experiment[];

  constructor(
    private _stateService: StateService,
    private _experimentsService: ExperimentsService) {}

  ngOnInit() {
    this.experiments = this._experimentsService.getExperiments();
    this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
