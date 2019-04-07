![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## API Server

### Author: Erin Trainor

### Links and Resources
* [PR](https://github.com/401-advanced-javascript-401d29/lab-09/pull/2)
* travis [![Build Status](https://www.travis-ci.com/401-advanced-javascript-401d29/lab-09.svg?branch=master)](https://www.travis-ci.com/401-advanced-javascript-401d29/lab-09)
* [back-end](https://api-server-401javascript.herokuapp.com/)
  * Note: I am getting the following error when I try to deploy to Heroku
  `No default language could be detected for this app.
			HINT: This occurs when Heroku cannot detect the buildpack to use for this application automatically.
			See https://devcenter.heroku.com/articles/buildpacks
 !     Push failed` 
<!-- * [front-end](http://xyz.com) (when applicable) -->

#### Documentation
* [swagger](http://xyz.com) - still working on this.
* [jsdoc](localhost:3000/docs)
  * currently getting this error when trying to access from local host {"error":"Resource Not Found"}
  * works with live-server at this route http://127.0.0.1:8080/docs/index.html

### Setup
#### `.env` requirements
* `PORT` - 3000
* `MONGODB_URI` - MONGODB_URI=mongodb://localhost:27017/baseball

#### Running the app
* `npm start`
<!-- * Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it. -->
  
#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?
  * all of them

#### UML
![UML Image](assets/uml.jpg)
