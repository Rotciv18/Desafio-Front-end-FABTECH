import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button';

import { Container, LogoContainer, ButtonsContainer } from './styles';

function Header({ history }) {
  const imageSource = 'https://www.graphicsprings.com/filestorage/stencils/cfbbcbcba7e52c00cbdc34cd0fe67672.png?width=500&height=500';

  const teste = () => {
    history.push('/register');
  };

  return (
    <Container>
      <Link style={{ textDecoration: 'none' }} to="/">
        <LogoContainer>
          <img src={imageSource} alt="" />
          <h1>FlightTracks</h1>
        </LogoContainer>
      </Link>
      <ButtonsContainer><Button label="Cadastrar" handleClick={teste} /></ButtonsContainer>
    </Container>
  );
}

Header.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

// Aparentemente withRouter deve ser usado no react-router v5
export default withRouter(Header);
