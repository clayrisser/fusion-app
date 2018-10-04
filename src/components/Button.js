import React, { Component } from 'react';
import { styled } from 'fusion-plugin-styletron-react';
import PropTypes from 'prop-types';
import { Button as ButtonContainer } from 'carbon-components-react';
import theme from '../theme';

const StyledButton = styled(ButtonContainer, props => ({
  color: 'white',
  backgroundColor: `${
    props.primary ? theme.primary : theme.secondary
  } !important`
}));

class Button extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    return (
      <StyledButton
        style={{
          color: 'purple'
        }}
        {...this.props}
      >
        {this.props.children}
      </StyledButton>
    );
  }
}

export default Button;
