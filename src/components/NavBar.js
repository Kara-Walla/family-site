import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Container } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import PollIcon from '@material-ui/icons/Poll';
import {
  Link
} from "react-router-dom";
import { lightgray } from 'color-name';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: '#03213bff',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'rgb('+lightgray+')'
  },
  title: {
    flexGrow: 1,
    color: 'rgb('+lightgray+')'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.toolbar}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Walla Vacation 2020
            </Typography>
            <Link to={`/`}>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <HomeIcon />
              </IconButton>
            </Link>
            <Link to={`/submit`}>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <PollIcon />
              </IconButton>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}