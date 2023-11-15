import React, { useEffect, useState } from "react";
import { getMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import PageTemplate from '../components/templateMovieListPage';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const HomePage = (props) => {
  const [page,setPage] = useState(1)

  const { data, error, isLoading, isError, refetch }  = useQuery('discover', () => getMovies(page),{enabled: true })

  useEffect(() => { 
    refetch()
    // eslint-disable-next-line
   }, [page]);
   //console.log(page)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const movies = data.results;
  const currentPage = data.page;
  const totalPages = data.total_pages

  let pagesUsed = 0
  if (totalPages > 20) {
    pagesUsed = 20
  } else {
    pagesUsed = totalPages
  }

  //console.log("currentPage: "+currentPage)
  //console.log("totalPages: "+totalPages)

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  //const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title='Discover Movies'
      movies={movies}
      setPage={setPage}
      currentPage={currentPage}
      pages={pagesUsed}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}/> 
  );
};

export default HomePage;