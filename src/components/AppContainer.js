import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import { NavBar } from '.'
import useStyles from './AppContainer.styles';

export default function AppContainer(props) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
        <NavBar/>
        <Container maxWidth="lg" className={classes.container}>
          {props.children}
        </Container>
    </React.Fragment>
  );
}