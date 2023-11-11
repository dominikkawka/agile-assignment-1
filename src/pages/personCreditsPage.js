import React from "react";
import { useParams } from 'react-router-dom';
import PersonCreditsListPageTemplate from "../components/templatePersonCreditsListPage";
import { getPersonCredits } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const PersonCreditsPage = (props) => {
   const { id } = useParams();
  
   const { data, error, isLoading, isError } = useQuery(
     ["person", { id: id }, "movie_credits"],
     getPersonCredits
   );
 
   if (isLoading) {
     return <Spinner />;
   }
 
   if (isError) {
     return <h1>{error.message}</h1>;
   }
   return (
     <>
     <PersonCreditsListPageTemplate credits={data}></PersonCreditsListPageTemplate>
     </>
  );
};

export default PersonCreditsPage;