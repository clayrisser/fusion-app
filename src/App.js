import React, { Component } from 'react';
import { Helmet } from 'fusion-plugin-react-helmet-async';
import { assetUrl } from 'fusion-core';
import Routes from './routes';

export default class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Hello World</title>
          <link
            rel="stylesheet"
            href={assetUrl(
              '../node_modules/carbon-components/css/carbon-components.min.css'
            )}
          />
        </Helmet>
        <Routes />
      </div>
    );
  }
}
