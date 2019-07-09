# Beer Style Classifier
Web application for filtering and classifying beers into possible beer styles based on their properties. Users enter different properties of a beer recipe such as bitterness in IBUs, color in SRM, and alcohol by volume ABV. The application checks these values against the characteristic ranges of values in the [BJCP Style Guide](https://www.bjcp.org/docs/2015_Guidelines_Beer.pdf). The application filters and lists any matching beer styles.

There is a copy deployed to Heroku here: [beer-style-classifier.herokuapp.com](http://beer-style-classifier.herokuapp.com)

## Utilized Web Stack
- `User Interface` - CSS, styled-components
- `Client` - React, TypeScript
- `Server` - Node.js, Express, TypeScript, pg
- `Database` - PostgreSQL

## Requirements
- Git
- Web browser
- Node
- Nodemon
- PostgreSQL
- Heroku CLI (Optional for hosting on Heroku)

## Setup and Run
```bash
# 1. Create PostgreSQL database named 'beer_style_classifier'
createdb beer_style_classifier

# 2. Create the database schema
psql -E -f database_schema.sql -d beer_style_classifier

# 3. Initalize database with style data
psql -E -f database_data.sql -d beer_style_classifier

# 4. Install Node dependencies/libraries using NPM
npm install

# 5. Start the server
npm run server

# 6. Start the client (runs locally on PORT 3000)
npm run client
```
**See:** [localhost:3000](http://localhost:3000)

## Deploying to Heroku

```bash
# 1. From the project directory run the following to setup Heroku
heroku create

# 2. Push the 'master' branch to the newly created 'heroku' remote
git push heroku master

# 3. Add Heroku addon for PostgreSQL databases
heroku addons:create heroku-postgresql:hobby-dev

# 4. Create the database schema for the remote database
heroku pg:psql -f database_schema.sql

# 5. Insert mock data for the remote database
heroku pg:psql -f database_data.sql
```

## Features

### Completed Features
- [x] Allows users to search for matching beer styles based on a beer's International Bitterness Units (IBUs), color in Standard Reference Method units (SRM), original gravity (O.G.), final gravity (F.G.), and alcohol by volume (ABV)
- [x] Utilizes TypeScript dialect of JavaScript
- [x] Utilizes React FunctionComponents and React hooks
- [x] Utilizes the CSS in JS library styled-components
- [x] Includes database entries for roughly 75% of beer styles listed in the BJCP Style Guide

### Planned Features
- [ ] Allow filtering styles based on a list of characteristic ingredients (e.g. Belgian yeast, wheat, sucrose, Noble hop varieties)
- [ ] Unit testing using Jest and Enzyme
- [ ] Include 100% of beer styles listed in BJCP in database
- [ ] Improve the aesthetics of the UI
- [ ] Leverage styled-components to allow the user to quickly swap the theme and colors of the UI

## Authors
Michael Stockman