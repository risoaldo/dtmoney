import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          tittle: 'Viagem',
          type: 'withdraw',
          category: 'Lazer',
          amount: 500,
          createdAt: new Date()
        }, 
        {
          id: 2,
          tittle: 'Frrela',
          type: 'deposit',
          category: 'Dev',
          amount: 1000,
          createdAt: new Date()
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get("/transactions", () => {
     return this.schema.all('transaction')
    })
    
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data)
     })
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
