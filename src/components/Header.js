import React, {useState} from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  margin-bottom: 2rem;
  background: #000000;
  padding: 1rem;
  color: #ffffff;
`;

const HeaderContent = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: 1220px;
`;

const HeaderQuery = styled.input``;

const HeaderDropdown = styled.div`
  display: inline-block;
  margin-left: 40px;
`;

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
  
  const dropdownOptions = ["date", "relevance", "none"];

  // TODO This should probably not be called upon dropdown selection, but rather be attached
  // to button click.  User flow feels clunky with this working independently
  const sorter = (e) => {
    props.sortBy(e.target.value);
  };

  return (
    <HeaderContainer className="article-preview-container">
      <HeaderContent>
        <HeaderQuery onKeyPress={enterSubmit} onChange={queryOnChange} value={value} />
        <HeaderDropdown>
            {/* TODO These elements should be styled components for consistency */}
            <select name="sort-dropdown" id="sort-dropdown" onChange={sorter}>
              <option key="option-blank" value="" > Sort Articles </option>
              {dropdownOptions.map(opt => 
                <option key={`option-${opt}`} value={`${opt}`}> {opt} </ option>
              )}
            </select>
        </HeaderDropdown>
        <HeaderQuerySubmit onClick={submit}>Search</HeaderQuerySubmit>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;