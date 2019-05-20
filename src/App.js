import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import AppBar from './header/AppBar'
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import SettingsDialog from "./body/SettingsDialog";


const theme = createMuiTheme(
    {
      palette: {
        primary: blue,
        secondary: red,
      },
    }
);

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stageObj: {},
      openSettings: false
    }
  }

  setStageObj = (obj) => {
    this.setState({stageObj: obj})
  };

  toggleSettings = () => {
    this.setState({openSettings: !this.state.openSettings})
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <AppBar toggle={this.toggleSettings}/>
        </div>
        <SettingsDialog open={this.state.openSettings} setStageObj={this.setStageObj} />
      </MuiThemeProvider>
    );
  }
}

export default App;
