import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Experiment} from '../common/experiment.model';
import {ExperimentsService} from '../common/experiments.service';
import {StateService} from '../common/state.service';
import {ExperimentDetailComponent} from './experiment-details/experiment.detail.component';

@Component({
    selector: 'experiments',
    templateUrl: 'app/experiments/experiments.component.html',
    directives: [ExperimentDetailComponent]

})
export class ExperimentsComponent {
    title: string;
    body: string;
    message: string;
    experiments: Experiment[];

    constructor(
        private _StateService: StateService,
        private _ExperimentsService: ExperimentsService
    ) {}

    ngOnInit() {
        this.title = 'Experiments Page';
        this.body = 'This is the about experiments body';

        this.experiments = this._ExperimentsService.getExperiments();
        this.message = this._StateService.getMessage();
    }

    updateMessage(m: string): void {
        this._StateService.setMessage(m);
    }
}
