import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Button({ label, handleClick }) {
  return (
    <Container type="button" onClick={() => handleClick()}>
      {label}
    </Container>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
