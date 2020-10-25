# Drew Cuddhy Dia&Co Code Challenge

> Drew Cuddhy <br />
> dcuddhy@gmail.com <br />
> 609-408-5891 <br />


This project assumes an `.env` including 
```
REACT_APP_API_KEY=<YOUR_NEWSAPI.ORG_KEY>
```

Three hours goes by quickly!  I did my best to meet all of the ACs.  I added a lot of comments for your reference.

If I had more time, I would:
1.  Ask for insight on how to sort by popularity (there is no obvious value for this in the data that I could see).
1.  Ask if there is any guidance on sorting on relevance.
1.  Refactor and move my sort function into a helper function.
1.  Couple the sorting with search button click, rather than fire it independently on select change.
1.  Style filter and sort to be closer to mock.
1.  Focus more on componentization - elements should be more thoughtfully broken up into components.
1.  Add an image fallback to display when article image value is null.
1.  There's a cruft `data.json` file still in the repo that I used to render elements while styling so that I wouldn't hit an API rate limit.  That was helpful, but it's sloppy to leave it in there.
1.  Test, test, test.  I would probably install Cypress.
1.  My responsive solution is good, but I see opportunities to make it better.


AC's
- Search for articles (in language 'en') by a search string (the homepage of the app is simply a search bar)
- Search results show the image, title, publish date, description and the url (as 'Read More' button) of the articles
- Search results are sortable by either of the following criterias - date, relevance, popularity or none
- Clicking the image or the 'Read More' button will open the article in a new tab
- Be mobile responsive! For smaller screen sizes, show articles in a single column and hide the article description
- Here is the proposed design for the app, the UI and styling needn't be exact!


___

# This app was built using the Dia&Co React Starter App

## Available Scripts

In the project directory, you can run:

### `yarn`

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
