import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

(window as any).MonacoEnvironment = {
  getWorkerUrl: function (moduleId: any, label: string) {
    if (label === 'json') {
      return '/assets/monaco-editor/min/vs/language/json/json.worker.js';
    }
    if (label === 'css') {
      return '/assets/monaco-editor/min/vs/language/css/css.worker.js';
    }
    if (label === 'html') {
      return '/assets/monaco-editor/min/vs/language/html/html.worker.js';
    }
    if (label === 'typescript' || label === 'javascript') {
      return '/assets/monaco-editor/min/vs/language/typescript/ts.worker.js';
    }
    return '/assets/monaco-editor/min/vs/editor/editor.worker.js';
  }
};

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
