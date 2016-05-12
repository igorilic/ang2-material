import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Eurong2rankAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Eurong2rankAppComponent);
