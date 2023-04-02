import React, { useEffect, useState } from 'react';

// Package Imports
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

// Custom Module Import
import MovieCard from './MovieCard';
import AddMovieDialog from './AddMovieDialog';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [open, setOpen] = React.useState(false);

  const [currMovie, setCurrMovie] = React.useState(undefined);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // callback for child
  const addMovie = async (movieObj) => {
    console.log('Line 29', movieObj);
    setMovies([...movies, movieObj]);
    fetch('https://63f9bdce897af748dcc2d723.mockapi.io/movies', {
      method: 'POST',
      body: JSON.stringify(movieObj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  const removeMovie = (movieTitle) => {
    const id = movies.find(({ title }) => title === movieTitle).id;
    setMovies(movies.filter(({ title }) => title !== movieTitle));

    fetch(`https://63f9bdce897af748dcc2d723.mockapi.io/movies/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
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

  const cleanForm = () => {
    console.log('Cleanfporm')
    setCurrMovie(undefined);
  }

  useEffect(() => {
    fetch('https://63f9bdce897af748dcc2d723.mockapi.io/movies')
      .then((response) => response.json())
      .then((data) => setMovies(data));
    console.log('Mounting Called')
  }, []);



  return (
    <>
      {/* {console.log('Movies List', movies)} */}
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

      {open && <AddMovieDialog
        // passing of data from parent to child
        open={open}
        handleClose={handleClose}
        addMovie={addMovie}
        currMovie={currMovie}
        editMovie={editMovie}
        cleanForm={cleanForm}
      />}
    </>
  )

}

export default MovieList;