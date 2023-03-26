import React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Fab, Typography } from '@mui/material';


const MovieCard = ({
  tech = '2D',
  title = '',
  language = 'English',
  rating = 'U',
  image = '',
  genre = '',
  removeMovie,
  loadMovie
}) => {
  return (
    <div style={{
      width: '230px',
      margin: 8,
      textAlign: 'center',
      border: '1px solid grey',
      position: 'relative'
    }} >

      <span
        style={{
          position: 'absolute',
          top: '40px',
          right: '10px',
          cursor: 'pointer'
        }}
        onClick={() => loadMovie(title)}
      >
        <EditIcon
          color="primary"
        />
      </span>
      <span
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          cursor: 'pointer'
        }}
        onClick={() => removeMovie(title)}
      >
        <DeleteIcon
          color="primary"
        />
      </span>
      <img src={image} alt={title} style={{ height: '278px', width: '230px' }} />
      <Typography variant="h5" noWrap >{title}</Typography>
      <Typography variant="h6" sx={{
        color: '#757575'
      }}>{language} | {rating}</Typography>
      <Button
        variant='contained'
        // component attribute/props
        color='primary'
        fullWidth
        sx={{
          // css property color
          color: 'white'
        }}
      >
        Book
      </Button>
    </div>
  )
}

export default MovieCard;