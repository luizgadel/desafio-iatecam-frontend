import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Model, Server } from 'miragejs'
import { products, sales, users } from './app/shared/services/models/data.mock';
import { environment } from './environments/environment.prod';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


//Mock do back-end
new Server({
  models: {
    user: Model,
    product: Model,
    sale: Model,
  },

  seeds(server) {
    users.forEach((user) => {
      server.create('user', user as Object);
    })

    products.forEach((product) => {
      server.create('product', product as Object);
    })

    sales.forEach((sale) => {
      server.create('sale', sale as Object);
    })
  },

  routes() {
    this.namespace = environment.mock_API_URL;

    this.get(this.namespace + '/user', (schema) => {
      return {
        users: schema.all('user').models,
      }
    });

    this.post(this.namespace + '/user', (schema) => {
      return {
        user: schema.first('user'),
      }
    });

    this.post(this.namespace + '/authenticate', (schema) => {
      return {
        user: schema.first('user'),
      }
    })

    this.get(this.namespace + '/product', (schema) => {
      return {
        products: schema.all('product').models,
      }
    });

    this.get(this.namespace + '/sale', (schema) => {
      return {
        sales: schema.all('sale').models,
      }
    });

    this.passthrough(environment.backend_API_URL + "/**");
  }
})
