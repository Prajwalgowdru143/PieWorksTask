import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // Adjust the import path to match your app's structure


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
