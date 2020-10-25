import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Articles from './components/Articles';
import Header from './components/Header';

const AppContainer = styled.div``;

const apiKey = process.env.REACT_APP_API_KEY || '';

// TODO There had ought to be ACs around relevance logic.  This is a guess.
const relevanceFilter = (primary, secondary, tertiary, phrase) => {
  // check title, description, content
  const lowerPrimary = primary ? primary.toLowerCase() : '';
  const lowerSecondary = secondary ? secondary.toLowerCase() : '';
  const lowerTertiary = tertiary ? tertiary.toLowerCase() : '';
  const lowerPhrase = phrase ? phrase.toLowerCase() : '';

  const primaryScore = (lowerPrimary.split(lowerPhrase).length - 1) * 3;
  const secondaryScore = (lowerSecondary.split(lowerPhrase).length - 1) * 2;
  const tertiaryScore = (lowerTertiary.split(lowerPhrase).length - 1);

  return primaryScore + secondaryScore + tertiaryScore;
}

function App() {
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [fetchedData, setFetchedData] = useState([]);
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
  useEffect(() => {
    dataFetch();
  }, []);

  // Update data upon query
  useEffect(() => {
    dataFetch();
  }, [query]);

  // TODO This switch really should not be inside the App component, but as is, 
  // I need `query` available for relevance filter.  In refactor, I should pass `query`
  // as an argument, and make this a helper function
  const sortArticles = (articles, criteria = '') => {
    let sortedArticles = articles;
    switch (criteria) {
      case 'date':
        // It looks like default sorting may already be by date, so this filter might underwhelming
        sortedArticles = articles && articles.sort(function (a, b) {
          if (a.publishedAt && b.publishedAt){
            if (a.publishedAt > b.publishedAt) {
              return -1;
            }
            if (a.publishedAt < b.publishedAt) {
              return 1;
            }
            return 0;
          }
        });      
        break;
      case 'relevance':
        const scoredArticles = articles && articles.map((article) => {return {...article, relevanceScore: relevanceFilter(article.title, article.description, article.content, query)}});

        sortedArticles = scoredArticles && scoredArticles.sort(function (a, b) {
            if (a.relevanceScore > b.relevanceScore) {
              return -1;
            }
            if (a.relevanceScore < b.relevanceScore) {
              return 1;
            }
            return 0;
        });
        break;
    }
    return sortedArticles;
  }

  return (
    <>
      <Header query={setQuery} sortBy={setSortBy} />
      <AppContainer className="app-container">
        <Articles data={sortArticles(fetchedData, sortBy)} />
      </AppContainer>
    </>
  );
}

export default App;
