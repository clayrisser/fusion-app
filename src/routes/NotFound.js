import React, { Component } from 'react';
import { NotFound as RouterNotFound } from 'fusion-plugin-react-router';

export default class NotFound extends Component {
  render() {
    return (
      <RouterNotFound>
        <div>404</div>
      </RouterNotFound>
    );
  }
}
