import React from 'react';
import { Link } from 'react-router-dom';

import { Container, LogoContainer } from './styles';

function Header() {
  const imageSource = 'https://www.graphicsprings.com/filestorage/stencils/cfbbcbcba7e52c00cbdc34cd0fe67672.png?width=500&height=500';
  return (
    <Container>
      <Link style={{ textDecoration: 'none' }} to="/">
        <LogoContainer>
          <img src={imageSource} alt="" />
          <h1>FlightTracks</h1>
        </LogoContainer>
      </Link>
    </Container>
  );
}

export default Header;
