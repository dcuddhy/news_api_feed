import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Articles from './components/Articles';
import Header from './components/Header';

const AppContainer = styled.div``;

const apiKey = process.env.REACT_APP_API_KEY || '';

function App() {
  const [query, setQuery] = useState('news');
  const [sortBy, setSortBy] = useState('date');
  const [fetchedData, setFetchedData] = useState([]);
  const encodedSearchQuery = encodeURIComponent(query); //take user input & encode expression into URL format
  // const apiEndpoint = `https://newsapi.org/v2/everything?country=us&q=${query}&apiKey=${apiKey}`;
  // const apiEndpoint = ` https://newsapi.org/v2/everything?pageSize=20&q=${encodeURIComponent(query)}&apiKey=${apiKey}`;
  const apiEndpoint = `http://newsapi.org/v2/everything?q=${encodedSearchQuery}&sortBy=${sortBy}&apiKey=${apiKey}`;

  useEffect(() => {
    fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => setFetchedData(data.articles))
    .catch((error) => {
      console.error('FETCH ERROR: ', error);
    });
  }, [query, sortBy]);

  return (
    <>
      <Header query={setQuery} sortBy={setSortBy} />
      <AppContainer className="app-container">
        <Articles data={fetchedData} />
      </AppContainer>
    </>
  );
}

export default App;
