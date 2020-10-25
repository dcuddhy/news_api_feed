import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background: yellow;
`;

const Header = () => {

  return (
    <HeaderContainer className="article-preview-container">
      header things are happening in here!
    </HeaderContainer>
  );
}

export default Header;