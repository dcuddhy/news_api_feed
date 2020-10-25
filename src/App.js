import React, {useEffect, useState} from 'react';
import './App.css';
import Articles from './components/Articles';
import styled from 'styled-components';
import Header from './components/Header';
import data from './data/data.json';

const AppContainer = styled.div`
  background: green;
`;

// TODO - What's left!
// Search for articles (in language 'en') by a search string (the homepage of the app is simply a search bar)
// Search results are sortable by either of the following criterias - date, relevance, popularity or none

const apiKey = process.env.REACT_APP_API_KEY || '';

function App() {
  const [query, setQuery] = useState('');
  const [fetchedData, setFetchedData] = useState(data.articles);
  // const [fetchedData, setFetchedData] = useState([]);
  const apiEndpoint = `https://newsapi.org/v2/top-headlines?country=us&q=${query}&apiKey=${apiKey}`;


  const dataFetch = () => {
    fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => setFetchedData(data.articles))
    .catch((error) => {
      console.error('FETCH ERROR: ', error);
    });
  }

  // Get initial Data
  // useEffect(() => {
  //   dataFetch();
  // }, []);

  // // Update data upon query
  // useEffect(() => {
  //   dataFetch();
  // }, [query]);

  return (
    <>
    <Header query={setQuery} />
    <AppContainer className="app-container">
      <Articles data={fetchedData} />
    </AppContainer>
    </>
  );
}

export default App;
