import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Eurong2rankAppComponent } from '../app/eurong2rank.component';

beforeEachProviders(() => [Eurong2rankAppComponent]);

describe('App: Eurong2rank', () => {
  it('should create the app',
      inject([Eurong2rankAppComponent], (app: Eurong2rankAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'eurong2rank works!\'',
      inject([Eurong2rankAppComponent], (app: Eurong2rankAppComponent) => {
    expect(app.title).toEqual('eurong2rank works!');
  }));
});
