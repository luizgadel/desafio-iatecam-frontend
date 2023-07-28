import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Model, Server } from 'miragejs'
import { sales } from './app/shared/services/models/data.mock';
import { environment } from './environments/environment.prod';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


//Mock do back-end
new Server({
  models: {
    sale: Model,
  },

  seeds(server) {
    sales.forEach((sale) => {
      server.create('sale', sale as Object);
    })
  },

  routes() {
    this.namespace = environment.mock_API_URL;

    this.get(this.namespace + '/sales', (schema) => {
      return {
        sales: schema.all('sale').models,
      }
    });

    this.passthrough(environment.backend_API_URL + "/**");
  }
})
