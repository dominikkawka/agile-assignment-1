# Assignment 1 - ReactJS app.

Name: Dominik Kawka

## Overview.

Web App using the TMDB API. Web Dev 2 Assignment 1.

[Video](https://youtu.be/CIAHc_Qc4qs)

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
+ Browse movies by popularity, now playing, top rated.
+ Find similar movies to the ones you enjoy by looking at recommendations/ similar.
+ View Movie Credits, and see actor overviews, along with other movies the actors were cast in.
+ Filter movies based on release date and score. (You have to click on one of the sorting options for the page to update)
+ Sort movies alphabetically or by rating
+ Pagination on the movie lists (You have to click on one of the sorting options for the page to update)
+ Login/Signup functionality

## Setup requirements.

`cd movies`

`npm i`

`npm start`

`firebase emulators:start --only auth`

## API endpoints.

+ Now Playing: Get a list of movies that are currently in theatres `movies/now_playing`
+ Popular: Get a list of movies ordered by popularity `movies/popularity`
+ Top Rated: Get a list of movies ordered by rating `movies/top_rated`
+ Recommendations: Get a list of recommended movies based on which movie you're looking at `movies/{id}/recommendations`
+ Similar: Get a list of similar movies based on which movie you're looking at `movies/{id}/similar`
+ Movie Credits: View the people responsible for a film `movies/{id}/credits`
+ Person Overview: View details about a person `person/{id}`
+ Person Credits: View a persons casting credits, `person/{id}/credits`

## Routing.

+ `movies/now_playing` - Get a list of movies that are currently in theatres.
+ `movies/popularity` - Get a list of movies ordered by popularity.
+ `movies/top_rated` - Get a list of movies ordered by rating.
+ `movies/{id}/recommendations` - Get a list of movie recommendations based on movie.
+ `movies/{id}/similar` - Get a list of similar movies based on movie.
+ `movies/{id}/credits` - Get a list of the cast on film
+ `person/{id}` - Get an overview about a person.
+ `person/{id}/credits` - Get a list of movies a person has been involved with.
+ `login` - Log into the movies app by email
+ `signup` - Sign up for the movies app by email

## Independent learning (If relevant).

I watched this [YouTube](https://www.youtube.com/watch?v=8v6fYfhvO5E) video as a reference for pagination.

[Multiple useQueries in a single component](https://stackoverflow.com/questions/57568506/multiple-usequeries-in-a-single-component)

[Sorting array with react hook](https://stackoverflow.com/questions/58087858/sort-an-array-with-react-hooks)

[Firebase Auth Documentation 1](https://firebase.google.com/docs/auth?authuser=2)

[Firebase Auth Documentation 2](https://firebase.google.com/docs/auth/web/start)

[Firebase Auth Where to start?](https://firebase.google.com/docs/auth/where-to-start?authuser=2)

[Firebase YouTube Channel](https://www.youtube.com/watch?v=rbuSx1yEgV8)

[MaterialUI login page template](https://github.com/mui/material-ui/blob/v5.14.16/docs/data/material/getting-started/templates/sign-in/SignIn.js)