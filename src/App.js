import React, {useEffect, useState} from 'react';
import './App.css';
import Articles from './components/Articles';
import styled from 'styled-components';
import Header from './components/Header';
import data from './data/data.json';

const AppContainer = styled.div`
  background: green;

  // @media (max-width: 795px) {
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   background: blue !important;
  // }
`;

function App() {
  const [fetchedData, setFetchedData] = useState(data);

  const apiKey = process.env.REACT_APP_API_KEY || '';
  // const apiEndpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  
  // TODO this works, but lets use sample data until we're cleaning up to make sure we don't hit an API limit
  // useEffect(() => {
  // fetch(apiEndpoint)
  //   .then(response => response.json())
  //   .then(data => setFetchedData(data.articles))
  //   .catch((error) => {
  //     console.error('FETCH ERROR: ', error);
  //   });
  // }, []);

  console.log('fetchedData: ', fetchedData);

  return (
    <>
    <Header />
    <AppContainer className="app-container">
      <Articles data={fetchedData.articles} />
    </AppContainer>
    </>
  );
}

export default App;
