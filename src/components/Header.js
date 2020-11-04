import React, {useState} from 'react';
import styled from 'styled-components';
import { Dropdown } from 'react-bootstrap';

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
  
  const dropdownOptions = [
    {
      'name': 'Date',
      'value': 'publishedAt',
    }, 
    {
      'name': 'Relevancy',
      'value': 'relevancy',
    }, 
    {
      'name': 'Popularity',
      'value': 'popularity',
    } 
  ];

  const sorter = (e) => {
    props.sortBy(e.target.value);
  };

  return (
    <HeaderContainer className="article-preview-container">
      <HeaderContent>
        <HeaderQuery onKeyPress={enterSubmit} onChange={queryOnChange} value={value} />
        {/* <HeaderDropdown>
            <select name="sort-dropdown" id="sort-dropdown" onChange={sorter}>
              <option key="option-blank" value="" > Sort Articles </option>
              {dropdownOptions.map(opt => 
                <option key={`option-${opt.value}`} value={`${opt.value}`}> {opt.name} </ option>
              )}
            </select>
        </HeaderDropdown> */}
        <HeaderQuerySubmit onClick={submit}>Search</HeaderQuerySubmit>
      </HeaderContent>


      <Dropdown name="sort-dropdown" id="sort-dropdown" onChange={sorter}>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown name="sort-dropdown" id="sort-dropdown" onChange={sorter}>
              <Dropdown.Item key="option-blank" value="" > Sort Articles </Dropdown.Item>
              {dropdownOptions.map(opt => 
                <Dropdown.Item key={`option-${opt.value}`} value={`${opt.value}`}> {opt.name} </ Dropdown.Item>
              )}
            </Dropdown>
        </Dropdown.Menu>
      </Dropdown>
    </HeaderContainer>
  );
}

export default Header;