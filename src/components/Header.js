import React, {useState} from 'react';
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
  width: 80%;
`;

const HeaderQuery = styled.input``;
const HeaderQuerySubmit = styled.div`
  display: inline-block;
  position: relative;
  margin: 0 40px;
  border-radius: 4px;
  background: #E81D36;
  cursor: pointer;
  padding: 0.5rem;
  width: 130px;
  text-align: center;
  color: #ffffff;
`;

const Header = (props) => {
  const [value, setValue] = useState('');

  const queryOnChange = (e) => {
    setValue(e.target.value);
  };

  const submit = () => {
    props.query(value);
  }

  const enterSubmit = (e) => {
    if (e.charCode !== 13) {
      return;
    }
    submit();
  }

  return (
    <HeaderContainer className="article-preview-container">
      <HeaderContent>
        <HeaderQuery onKeyPress={enterSubmit} onChange={queryOnChange} value={value} />
        <HeaderQuerySubmit onClick={submit}>Search</HeaderQuerySubmit>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;