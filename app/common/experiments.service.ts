import {Injectable} from '@angular/core';
import {Experiment} from './experiment.model';

@Injectable()
export class ExperimentsService {
  private experiments: Experiment[] = [
    {name: 'Experiment 1', description: 'This is an experiment', completed:0},
    {name: 'Experiment 2', description: 'This is an experiment', completed:0},
    {name: 'Experiment 3', description: 'This is an experiment', completed:0},
    {name: 'Experiment 4', description: 'This is an experiment', completed:0}
  ];

  getExperiments(): Experiment[] {
    return this.experiments;
  };
}
