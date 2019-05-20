import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import fs from 'fs';


function Settings(props) {

  return(
    <Typography>Settings</Typography>
  );

}

class Stages extends React.Component {

  constructor(props) {
    super(props);

    this.base_url = "https://www.smashbros.com/assets_v2/img/stage/stage_img";

    this.ext = ".jpg";

    this.stages = [1, 3, 8, 19, 20, 24, 33, 37, 39, 40, 42, 44, 62, 79, 85];

    const temp = []  ;
    for (let i = 0; i < this.stages.length; i++) {
      temp[i] = ""
    }

    this.state = {
      stageType: temp
    }

  }

  handleChange = (value, index) => {
    const temp = this.state.stageType.slice();
    temp[index] = value;
    this.setState({stageType: temp});
    let tempObj = {};
    for (let [i, value] of this.state.stageType.values()) {
      if (value) {
        tempObj[this.stages[i]] = value;
      }
    }
    this.props.setStageObj(tempObj);
  };

  render() {

    return(
      <div style={{display: "flex", flexWrap: "wrap" ,justifyContent: "space-around"}}>
        {this.stages.map( (value, index) => (
          <div style={{display: "flex", flexDirection: "column"}} key={value}>
            <img src={this.base_url + value + this.ext} alt={value} width="375" height="211"/>
            <FormControl>
              <InputLabel shrink>Type</InputLabel>
              <Select
                value={this.state.stageType[index]}
                onChange={(event) => this.handleChange(event.target.value, index)}
                input={<Input name="type"/>}
                displayEmpty
              >
                <MenuItem value={""}>Disabled</MenuItem>
                <MenuItem value={"Starter"}>Starter</MenuItem>
                <MenuItem value={"Counterpick"}>Counterpick</MenuItem>
              </Select>
            </FormControl>
          </div>
        ))}
      </div>
    );

  }



}

function Connection(props) {

  return(
    <Typography>Connection</Typography>
  );

}

class SettingsDialog extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      tab: 0,
      open: this.props.open
    };

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps !== this.props) {
      this.setState({
        open: this.props.open
      })
    }
  }


  handleChange = (event, value) => {
    this.setState({ tab: value });
  };

  handleClose = () => {
    this.setState({open: false})
    console.log(this.props.stageObj)
  };

  render() {

    return (
      <Dialog open={this.state.open} fullWidth maxWidth={"lg"} onClose={this.handleClose}>
        <Tabs
          value={this.state.tab}
          variant={"fullWidth"}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
        >
          <Tab label="Settings" />
          <Tab label="Stages" />
          <Tab label="Connection" />
        </Tabs>
        <DialogContent>
          {this.state.tab === 0 && <Settings/>}
          {this.state.tab === 1 && <Stages setStageObj={this.props.setStageObj}/>}
          {this.state.tab === 2 && <Connection/>}
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

}


export default SettingsDialog