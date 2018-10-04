import React, { Component } from 'react';
import { styled } from 'fusion-plugin-styletron-react';
import { Button as ButtonContainer } from 'carbon-components-react';

const Button = styled('div', {
  color: 'pink',
  backgroundColor: 'green !important'
});

export default class Home extends Component {
  render() {
    return <Button $as={ButtonContainer}>hi</Button>;
  }
}
