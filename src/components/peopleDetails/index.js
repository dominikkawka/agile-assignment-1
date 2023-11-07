import React, {useState, useEffect}  from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";

import { useParams } from 'react-router-dom';
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import PeopleHeader from "../headerPeople";
import CakeIcon from '@mui/icons-material/Cake';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const PeopleDetails = ({ person }) => { 
  console.log(person)
  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {person.biography}
      </Typography>

      <Paper component="ul" sx={{...root}}>
      <li><Chip label="Birthday" icon={<CakeIcon />} sx={{...chip}} color="primary" /></li>
      <li><Chip label={person.birthday} sx={{...chip}}/></li>
      
      { person.deathday
            ? <li><Chip label="Deathday" icon={<SentimentVeryDissatisfiedIcon />} sx={{...chip}} color="primary" /></li> 
            : null 
      } 
      { person.deathday
            ? <li><Chip label={person.deathday} sx={{...chip}}/></li>
            : null 
      } 
      </Paper>
      <Paper
        component="ul" 
        sx={{...root}}>
        <li><Chip sx={{...chip}} color="primary" label="Birthplace" /></li>
        <li><Chip sx={{...chip}} label={person.place_of_birth}></Chip></li>

      </Paper>
      <Paper>
        <Link to={`credits`}>
          <Button>
            CREDITS
          </Button>
        </Link>
      </Paper>
      </>
  );
};
export default PeopleDetails;