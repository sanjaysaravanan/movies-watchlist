import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select
} from '@mui/material';

/**
 * Movie Details
 *  1. Title
 *  2. Language
 *  3. Rating
 *  4. Genere
 *  5. Timing
 */

export default function AddMovieDialog({
  open = false,
  handleClose = () => undefined,
  addMovie,
  currMovie,
  editMovie,
}) {

  const [lang, setLang] = useState(currMovie !== undefined ? currMovie.language : 'English');
  const [genre, setGenre] = useState(currMovie !== undefined ? currMovie.genre : 'Action');

  const handleLang = (event) => {
    setLang(event.target.value);
  };
  const handleGenre = (event) => {
    setGenre(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {};

    Array.from(event.target.elements).map((element) => {
      if (element.nodeName === 'INPUT') {
        if ((element.type === 'radio' && element.checked) || element.type !== 'radio') {
          data[element.name] = element.value;
        }
      }
    });

    console.log(data);
    if (currMovie === undefined) {
      // passing data from child to parent with help of callback function
      addMovie(data);
    } else {
      editMovie(currMovie.title, data);
    }


    setLang('English');
    setGenre('Action');
    handleClose();
  }
  // Following useEffect sysntax will run when the compoenent is Mounted
  // some actions during only mouting 
  useEffect(() => {
    console.log('Line 69', currMovie);
  }, []);

  // Actions on Mounting & Updating( props / state inside array changes ) Stage
  useEffect(() => {
    console.log('Line 75', currMovie); //
    if (currMovie !== undefined) {
      setLang(currMovie.language);
      setGenre(currMovie.genre);
    }
  }, // dependency array ( props / state ) props value or state value changes
    [currMovie]);


  return (
    <div className="sanjay" >
      {console.log(currMovie)}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={'sm'}
        fullWidth={true}
      >
        <DialogTitle>{currMovie ? 'Edit Movie' : 'Add a New Movie'}</DialogTitle>
        <form onSubmit={handleSubmit} >
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              name="title"
              label="Movie Title"
              type="text"
              fullWidth
              variant="standard"
              color='secondary'
              required
              size='small'
              // defaultValue={currMovie?.title || ''}
              defaultValue={currMovie !== undefined ? currMovie.title : ''}
              disabled={currMovie !== undefined}
            />
            <TextField
              id="image"
              name="image"
              label="Movie Image"
              type="text"
              fullWidth
              variant="standard"
              color='secondary'
              required
              size='small'
              defaultValue={currMovie !== undefined ? currMovie.image : ''}
            />
            <FormControl
              variant="standard"
              fullWidth
              color="secondary"
              sx={{
                mt: 1
              }}
            >
              <InputLabel id="lang">Language</InputLabel>
              <Select
                labelId="lang"
                id="lang"
                value={lang}
                onChange={handleLang}
                label="Language"
                name='language'
                required
                fullWidth
              >
                <MenuItem value={'Hindi'}>Hindi</MenuItem>
                <MenuItem value={'English'}>English</MenuItem>
                <MenuItem value={'Tamil'}>Tamil</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              required
              color="secondary"
              sx={{
                mt: 1
              }}
            >
              <FormLabel id="rating">Rating</FormLabel>
              <RadioGroup
                aria-labelledby="rating"
                defaultValue={currMovie?.rating || 'U'}
                name="rating"
                row
              >
                <FormControlLabel value="U" control={<Radio />} label="U" />
                <FormControlLabel value="U/A" control={<Radio />} label="U/A" />
                <FormControlLabel value="A" control={<Radio />} label="A" />
              </RadioGroup>
            </FormControl>
            <FormControl
              variant="standard"
              fullWidth
              color="secondary"
              sx={{
                mt: 1
              }}
            >
              <InputLabel id="genre">Genre</InputLabel>
              <Select
                labelId="genre"
                id="genre"
                value={genre}
                onChange={handleGenre}
                label="Genre"
                name='genre'
                required
                fullWidth
              >
                <MenuItem value={'Action'}>Action</MenuItem>
                <MenuItem value={'Thriller'}>Thriller</MenuItem>
                <MenuItem value={'Romance'}>Romance</MenuItem>
                <MenuItem value={'Comedy'}>Comedy</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button type='button' variant='contained' color="error" onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant='contained' color='primary'>{currMovie ? 'Edit' : 'Add'}</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}