import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background: #000000;
  color: #ffffff;
  padding: 1rem;
  margin-bottom: 2rem;
`;

const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 1220px;
`;

const Header = () => {

  return (
    <HeaderContainer className="article-preview-container">
      <HeaderContent>
        header things are happening in here!
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;