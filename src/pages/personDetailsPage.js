import React from "react";
import { useParams } from 'react-router-dom';
import TemplatePeoplePage from "../components/templatePeoplePage";
import { getPerson } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import PeopleDetails from "../components/peopleDetails";

const PersonPage = (props) => {
  const { id } = useParams();
  
  const { data: person, error, isLoading, isError } = useQuery(
    ["person", { id: id }],
    getPerson
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {person ? (
        <>
          <TemplatePeoplePage person={person}>
            <PeopleDetails person={person} />
          </TemplatePeoplePage>
        </>
      ) : (
        <p>Waiting for people details</p>
      )}
    </>
  );
};

export default PersonPage;