import React, {useState, useEffect} from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingReleases } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchIcon from '../components/cardIcons/addToWatch'


const UpcomingPage = (props) => {
  const [page,setPage] = useState(1)

  const { data, error, isLoading, isError, refetch }  = useQuery('upcoming', () => getUpcomingReleases(page), {enabled: true})

  useEffect(() => { 
    refetch()
    // eslint-disable-next-line
   }, [page]);
   console.log(page)

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

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      setPage={setPage}
      currentPage={currentPage}
      pages={pagesUsed}
      action={(movie) => {
        return <AddToWatchIcon movie={movie} />
      }}
    />
  );
};

export default UpcomingPage;