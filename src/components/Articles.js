import React from 'react';
import styled from 'styled-components';

const ArticlePreviewContainer = styled.div`
  background: pink;
`;

const Articles = (props) => {
  const articleData = props.data;
  console.log('articleData: ', articleData);
  return (
    <ArticlePreviewContainer className="article-preview-container">
      {/* TODO should probably create `Article` component, but one thing at a time */}
      article things are happening in here!
    </ArticlePreviewContainer>
  );
}

export default Articles;
