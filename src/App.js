import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import AppBar from './header/AppBar'
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

const theme = createMuiTheme(
    {
      palette: {
        primary: blue,
        secondary: red,
      },
    }
);

function App(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <AppBar/>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
