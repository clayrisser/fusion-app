import FusionReact from 'fusion-react';
import Helmet from 'fusion-plugin-react-helmet-async';
import React from 'react';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';
import App from './App';

export default () => {
  const app = new FusionReact(<App />);
  app.register(Helmet);
  app.register(Router);
  app.register(Styletron);
  return app;
};
