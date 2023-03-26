import React, { useState } from 'react';

// Package Imports
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

// Custom Module Import
import MovieCard from './MovieCard';
import AddMovieDialog from './AddMovieDialog';
import { Stack } from '@mui/system';

const MovieList = () => {
  const data = [
    { title: 'Veera Simha Reddy (U/A) - Telugu', image: 'https://img.ticketnew.com/tn/movie/26457/6.jpg', language: 'Hindi', rating: 'A', genre: 'Action' },
    { title: 'Mrs. Chatterjee vs Norway - Hindi', image: 'https://img.ticketnew.com/tn/movie/27120/6.jpg', language: 'Tamil', rating: 'U/A', genre: 'Thriller' },
    { title: 'Bholaa', image: 'https://img.ticketnew.com/tn/movie/27199/6.jpg', language: 'Tamil', rating: 'U/A', genre: 'Thriller' },
    { title: 'Bhole', image: 'https://img.ticketnew.com/tn/movie/26814/6.jpg', language: 'Hindi', rating: 'U', genre: 'Romance' },
    { title: 'John Wick 4', image: 'https://img.ticketnew.com/tn/movie/27153/6.jpg', language: 'English', rating: 'A', genre: 'Action' }
  ];


  const [movies, setMovies] = useState(data);
  const [open, setOpen] = React.useState(false);

  const [currMovie, setCurrMovie] = React.useState(undefined);

  const handleClickOpen = () => {
    setCurrMovie(undefined);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // callback for child
  const addMovie = (movieObj) => {
    setMovies([...movies, movieObj]);
  }

  const removeMovie = (movieTitle) => {
    setMovies(movies.filter(({ title }) => title !== movieTitle))
  }

  const loadMovie = (movieTitle) => {
    const movie = movies.find(({ title }) => title === movieTitle);
    setCurrMovie(movie);
    setOpen(true);
  }

  const editMovie = (movieTitle, movieObj) => {
    const editIndex = movies.findIndex(({ title }) => movieTitle === title);

    console.log(editIndex, movieObj);

    var newArr = [...movies];
    newArr[editIndex] = movieObj;

    console.log(newArr);

    setMovies(newArr);

  }

  return (
    <>
      {console.log('Movies List', movies)}
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        {movies.map(({ image, title, rating, language, genre }) => (
          <MovieCard
            image={image}
            title={title}
            rating={rating}
            language={language}
            genre={genre}
            key={title}
            removeMovie={removeMovie}
            loadMovie={loadMovie}
          />
        ))}
      </div>

      <AddMovieDialog
        // passing of data from parent to child
        open={open}
        handleClose={handleClose}
        addMovie={addMovie}
        currMovie={currMovie}
        editMovie={editMovie}
      />
    </>
  )

}

export default MovieList;