import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsDialog from  '../body/SettingsDialog'


const styles = {
    root: {
      flexGrow: 1,
      justifyContent: "space-between"
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    rightButton: {
        alignSelf: "flex-right"
    }
};

class myAppBar extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
          <div className={classes.root}>
              <AppBar>
                  <Toolbar className={classes.root}>
                      <div style={{display: 'flex', flexDirection: 'row', alignItems: "center"}}>
                          <Typography variant={"h6"} color={"inherit"}>Stage Bans</Typography>
                      </div>
                      <div>
                          <IconButton className={classes.rightButton} color={"inherit"} onClick={this.props.toggle}>
                              <SettingsIcon/>
                          </IconButton>
                      </div>
                  </Toolbar>
              </AppBar>
          </div>
        );
    }
}

export default withStyles(styles)(myAppBar);
