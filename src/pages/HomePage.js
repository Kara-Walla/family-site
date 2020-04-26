import React from 'react';
import {
  Link
} from "react-router-dom";
import { Grid, Typography, Button } from '@material-ui/core'
import useStyles from './HomePage.styles'

export default function HomePage() {
    const classes = useStyles()
    const intViewportHeight = window.innerHeight - 64;
    return (
      <Grid container style={{height: intViewportHeight}} className={classes.centerContents}>
        <Grid item xs={12} className={classes.banner}>
          <Typography variant="h1" align="center" className={classes.text}>Welcome</Typography>
          <Typography variant="h4" align="center" className={classes.text}>It's time to plan our next vacation</Typography>
          <Link to="/submit" className={classes.link}>
            <Button 
              variant="contained"
              className={classes.secondButton}
            >
              Complete the survey
            </Button>
          </Link>
        </Grid>
      </Grid>
    );
}
