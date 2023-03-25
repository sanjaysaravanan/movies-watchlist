import React, { useState } from 'react';

// Package Imports
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

// Custom Module Import
import MovieCard from './MovieCard';
import AddMovieDialog from './AddMovieDialog';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px'
        }}
        onClick={handleClickOpen}
      >
        <AddIcon color="secondary" />
      </Fab>
      {movies.map(() => (
        <MovieCard />
      ))}
      <AddMovieDialog open={open} handleClose={handleClose} />
    </>
  )

}

export default MovieList;