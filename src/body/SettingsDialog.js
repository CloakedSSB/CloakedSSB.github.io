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

function Settings(props) {

  return(
    <Typography>Settings</Typography>
  );

}

function Stages(props) {

  return(
    <Typography>Stages</Typography>
  );

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
    }
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
          {this.state.tab === 1 && <Stages/>}
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