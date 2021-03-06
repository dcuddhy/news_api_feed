# Drew Cuddhy Dia&Co Code Challenge

> Drew Cuddhy <br />
dcuddhy@gmail.com <br />
609-408-5891 <br />

<img width="800px" src="https://user-images.githubusercontent.com/8904409/97134364-aaf58780-1712-11eb-8466-8da23b0e3ea3.png">

<img width="800px" src="https://user-images.githubusercontent.com/8904409/97134355-a5983d00-1712-11eb-9d91-de9b57e55825.gif">

This project assumes an `.env` including 
```
REACT_APP_API_KEY=<YOUR_NEWSAPI.ORG_KEY>
```

Three hours goes by quickly!  I did my best to meet all of the ACs.  I added a lot of comments for your reference.

If I had more time, I would:
1.  Ask for insight on how to sort by popularity (there is no obvious value for this in the data that I could see).
1.  Ask if there is any guidance on sorting on relevance.
1.  Refactor and move my sort function into a helper function.
1.  Can probably refactor switch out of sort function, consolidate blocks, and dynamically set comparitive value.
1.  Couple the sorting with search button click, rather than fire it independently on select change.
1.  Style filter and sort to be closer to mock.
1.  Refactor the sort dropdown itself to display Title Case options.
1.  Focus more on componentization - elements should be more thoughtfully broken up into components.
1.  My responsive solution is good, but I see opportunities to make it better.
1.  Pull in a different date library as moment is deprecated.
1.  Test, test, test.  I would probably install Cypress.


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

Install dependencies.

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
