import React, { useEffect, useState } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getTopRatedReleases } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchIcon from '../components/cardIcons/addToWatch'


const TopRatedPage = (props) => {
  const [page,setPage] = useState(1)

  const { data, error, isLoading, isError, refetch }  = useQuery('top_rated', () => getTopRatedReleases(page), {enabled: true})

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

  return (
    <PageTemplate
      title='Top Rated Movies'
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

export default TopRatedPage;