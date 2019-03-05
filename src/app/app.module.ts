import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule {
  constructor() {
    const bundles = ['zoom-main', 'zoom-polyfills', 'zoom-runtime', 'zoom-scripts'];

    bundles
      .forEach(name => document.body.appendChild(this.getScriptTag(name)));

  }

  getScriptTag(fileName: string): HTMLElement {
    const scriptTag = document
      .createElement(`script`);

    scriptTag.setAttribute('src', `assets/zoom-button/${fileName}.js`);
    scriptTag.setAttribute('type', 'text/javascript');

    return scriptTag;
  }
}
