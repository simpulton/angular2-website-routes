
import {
  describe,
  expect,
  it
} from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('Home Component', () => {
  it('should be named `HomeComponent`', () => {
    expect(HomeComponent['name']).toBe('HomeComponent');
  });

  it('should have a method called `updateMessage`', () => {
    expect(HomeComponent.prototype.updateMessage).toBeDefined();
  });
});
