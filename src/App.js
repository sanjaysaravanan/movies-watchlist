import * as React from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import MovieList from './MovieList/MovieList';
import BasicTable from './TableMUI';
import BasicTextFields from './TextField';
import FullScreenDialog from './Dialog';
import Types from './Typography';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#FFC20E',
    },
    secondary: {
      main: '#448aff',
    }
  },
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
          borderRadius: 0
        },
      },
    },
  },
});



function MovieCard() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained" color="success" >Contained</Button>
      <Button variant="outlined" color='primary'>Book</Button>
    </Stack>
  );
}

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme} >
        {/* <MovieCard />
        <BasicTable />
        <BasicTextFields />
        <FullScreenDialog />
        <Types /> */}
        <MovieList />
      </ThemeProvider>
    </div>
  );
}

export default App;
