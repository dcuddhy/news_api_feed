// Yes, moment is recently deprecated, but it is so familiar and time is limited.
import moment from 'moment'
import React from 'react';
import styled from 'styled-components';

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
  grid-auto-rows: minmax(390px, auto);
  grid-gap: 1em;
  margin: 0 auto;
  width: 80%;
  max-width: 1220px;

  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 884px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ArticlePreviewContainer = styled.div`
  width: 390px;
  display: inline-block;
  background: #ffffff;
  margin: 0 auto;

  @media (max-width: 884px) {
    width: 100%;
  }
`;

const ArticlePreviewImage = styled.img`
  width: 100%;
`;

const ArticlePreviewContent = styled.div`
  padding: 48px;
  text-align: left;
`;

const ArticlePreviewTitle = styled.h2`
  font-weight: 600;
`;

const ArticlePreviewDate = styled.h5`
  padding: 0.5rem;
  text-align: right;
  color: #888888;
`;

const ArticlePreviewDescription = styled.p`
  @media (max-width: 884px) {
    display: none;
  }
`;

const ReadMore = styled.div`
  position: relative;
  margin: 0 0 40px 40px;
  border-radius: 4px;
  background: #000000;
  cursor: pointer;
  padding: 0.5rem;
  width: 130px;
  text-align: center;
  color: #ffffff;
`;

const fallbackImage = 'https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png';

const Articles = (props) => {
  const articleData = props.data;

  return (
    <LayoutGrid className='layout-grid'>
      {articleData && articleData.map((article, a) => (
        <ArticlePreviewContainer key={`article-preview-container-${a}`} className='article-preview-container'>
          <ArticlePreviewImage src={`${article.urlToImage || fallbackImage}`} className="article-preview-image" />
          <ArticlePreviewContent className='article-preview-content'>
            <ArticlePreviewTitle className='article-title'>{article.title}</ArticlePreviewTitle>
            <ArticlePreviewDate className='article-preview-date'>{moment(article.publishedAt).format('MMM. Do, YYYY')}</ArticlePreviewDate>
            <ArticlePreviewDescription className='article-preview-description'>{article.description}</ArticlePreviewDescription>
          </ArticlePreviewContent>
          <ReadMore onClick={()=> window.open(`${article.url}`, "_blank")}>Read More</ReadMore>
        </ArticlePreviewContainer>
      ))}
    </LayoutGrid>
  );
}

export default Articles;
