import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import SiteHeader from './components/siteHeader'
import MoviesContextProvider from "./contexts/moviesContext";

import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingPage from "./pages/upcomingPage";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import PopularPage from "./pages/popularPage";
import TopRatedPage from "./pages/topRatedPage";
import NowPlayingPage from "./pages/nowPlayingPage";
import MovieRecommendationsPage from "./pages/movieRecommendedPage";
import MovieCreditsPage from "./pages/movieCreditsPage";
import MovieSimilarPage from "./pages/movieSimilarPage";

import PersonPage from "./pages/personDetailsPage";
import PersonCreditsPage from "./pages/personCreditsPage";

import LoginPage from "./pages/loginPage";
import CreateAccountPage from "./pages/createAccountPage";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SiteHeader />
      <MoviesContextProvider>
      <Routes>
        <Route exact path="/movies/favorites" element={<FavoriteMoviesPage />} />
        <Route exact path="/movies/upcoming" element={<UpcomingPage />} />
        <Route exact path="/movies/popular" element={<PopularPage />} />
        <Route exact path="/movies/top_rated" element={<TopRatedPage />} />
        <Route exact path="/movies/now_playing" element={<NowPlayingPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/movies/:id/recommendations" element={<MovieRecommendationsPage/>} />
        <Route path="/movies/:id/similar" element={<MovieSimilarPage/>} />
        <Route path="/movies/:id/credits" element={<MovieCreditsPage/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
        
        <Route path="/person/:id" element={ <PersonPage /> } />
        <Route path="/person/:id/credits" element={ <PersonCreditsPage /> } />

        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/signup" element={ <CreateAccountPage /> } />
      </Routes>
      </MoviesContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);