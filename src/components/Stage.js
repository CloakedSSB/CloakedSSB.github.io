import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Paper';

const styles = {

  root: {
    padding: "5px",
    paddingBottom: "1px",
    margin: "10px",
    display: "inline-block",
  },
  banned: {
    backgroundColor: "rgba(213, 0, 0, 0.7)"
  },
  selected: {
    backgroundColor: "rgba(100,221,23 ,0.7)"
  }

};

class Stage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      banned: this.props.state === "Banned",
      selected: this.props.state === "Selected",
    };

    this.imageUrl = "https://www.smashbros.com/assets_v2/img/stage/stage_img" + this.props.stage + ".jpg"

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.state !== this.props.state) {
      this.setState ({
        banned: this.props.state === "Banned",
        selected: this.props.state === "Selected"
      });
    }
  }

  render() {

    const {classes} = this.props;
    console.log(this.state);
    return (
      <Card className={classes.root} onClick={(() => this.props.handleClick(this.props.stage))}>
        <div style={{position: "absolute", width: "375px", height: "211px", opacity: "0.5"}} className={this.state.banned ? classes.banned : (this.state.selected ? classes.selected : undefined)}/>
        <img src={this.imageUrl} alt={this.props.stage} width="375" height="211"/>
      </Card>
    );

  }



}

export default withStyles(styles)(Stage)