import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import AppBar from './header/AppBar'
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import SettingsDialog from "./body/SettingsDialog";
import Stage from "./components/Stage"


const theme = createMuiTheme(
    {
      palette: {
        primary: blue,
        secondary: red,
      },
    }
);

class Stages extends React.Component {

  constructor(props) {

    super(props);

    this.banCount = 0;

    this.state = {};

  }

  handleStageClick = (stage) => {
    console.log(stage + " clicked!");
    if (this.state[stage] === "Banned") {
      this.setState({[stage] : undefined});
      this.banCount--;
    }
    else if (this.banCount < this.props.banMax) {
      this.setState({
        [stage] : "Banned"
      });
      this.banCount++;
      console.log(this.banCount)
    } else {
      this.setState({
        [stage] : "Selected"
      })
    }
  };

  render() {
    return(
      this.props.stages.map(value => (
        <Stage stage={value} key={value} state={this.state[value]} handleClick={this.handleStageClick}/>
      ))
    );
  }


}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      starters: [],
      counterpicks: [],
      openSettings: false,
      tab: 0
    };
    this.stageObj = {}
  }

  setStageObj = (obj) => {
    this.stageObj = JSON.parse(JSON.stringify(obj))
    this.setState({
      starters: Object.keys(obj).filter(stage => obj[stage] === "Starter"),
      counterpicks: Object.keys(obj).filter(stage => obj[stage] === "Counterpick")
    });
    console.log(obj);
  };

  toggleSettings = () => {
    this.setState({openSettings: !this.state.openSettings})
  };

  switchTab = (value) => {
    this.setState({tab: value})
  };

  render() {
    console.log(this.state);
    return (
      <MuiThemeProvider theme={theme}>
        <div style={{display: "flex", flexDirection: "column"}}>
          <div>
            <AppBar toggle={this.toggleSettings} handleTabChange={this.switchTab} tab={this.state.tab}/>
          </div>
          <div style={{marginTop: "100px", display:"flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
            {this.state.tab === 0 && <Stages stages={this.state.starters} banMax={3}/>}
            {this.state.tab === 1 && <Stages stages={this.state.starters.concat(this.state.counterpicks)} banMax={2}/>}
          </div>
        </div>
        <SettingsDialog toggle={this.toggleSettings} open={this.state.openSettings} setStageObj={this.setStageObj} stageObj={this.stageObj}/>
      </MuiThemeProvider>
    );
  }
}

export default App;
