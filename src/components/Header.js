import React, {useState} from 'react';
import styled from 'styled-components';
import { Button, Dropdown, FormControl, InputGroup, Navbar } from 'react-bootstrap';

 const ButtonContainer = styled.div`
  margin: 0 0 0 40px;
 `;

const Header = (props) => {
  const [value, setValue] = useState('');
  const [sortByValue, setSortByValue] = useState('');

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

  const sorter = (eventKey) => {
    setSortByValue(eventKey);
    props.sortBy(eventKey);
  };

  return (
    <Navbar bg="dark" variant="dark" className="article-preview-container">
      <InputGroup>
        <FormControl
          aria-describedby="basic-addon2"
          aria-label="Search For News"
          onChange={queryOnChange}
          onKeyPress={enterSubmit}
          placeholder="Search For News"
          value={value}
        />
        <Dropdown name="sort-dropdown" id="sort-dropdown" onSelect={(eventKey) => sorter(eventKey)}>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Sort Articles
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown name="sort-dropdown" id="sort-dropdown" onChange={sorter}>
              {dropdownOptions.map(opt => 
                <Dropdown.Item eventKey={`${opt.value}`} key={`option-${opt.value}`} value={`${opt.value}`} className={opt.value === sortByValue ? 'active' : ''}> {opt.name} </ Dropdown.Item>
              )}
            </Dropdown>
          </Dropdown.Menu>
        </Dropdown>
        <ButtonContainer>
          <Button variant="danger" onClick={submit}>Search</Button>
        </ButtonContainer>
      </InputGroup>
    </Navbar>
  );
}

export default Header;