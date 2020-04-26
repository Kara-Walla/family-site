import React from 'react';
import useStyles from './SubmitPage.styles'
import { Grid, Typography, TextField, Button, Paper, IconButton } from '@material-ui/core'
import CachedIcon from '@material-ui/icons/Cached'
import { startCase } from 'lodash'
import { dad, mom, alex, janna, kara, taylor, david, heather, kyra, nathan, becca } from '../images';

export default function SubmitPage() {
  console.log("URL root: " + process.env.PUBLIC_URL)
    const classes = useStyles()
    const intViewportHeight = window.innerHeight - 65;
    const [name, setName] = React.useState('')
    const [nickname, setNickname] = React.useState('')
    const [match, setMatch] = React.useState(false)
    const familyNames = ["wade", "dad", "mom", "lori", "alex", "alejandro", "janna", "kara", "taylor", "david", "heather", "kyra", "kyrajo", "kyra jo", "nathan", "nate", "spectate", "spectatenate", "becca", "rebecca", "lorraine"]

    function reset() {
      setName('')
      setNickname('')
      setMatch(false)
    }

    function formatName(e) {
      const firstName = e.target.value.toLowerCase()
      setName(firstName)
      if (familyNames.includes(firstName)) {
        getNickname(firstName)
        setMatch(true)
      }
    }

    function getNickname(firstName) {
      switch(firstName) {
        case "wade":
        case "dad":
          setNickname('dad')
          break;
        case "lori":
        case "lorraine":
        case "mom":
          setNickname('mom')
          break;
        case "alex":
        case "alejandro":
          setNickname('alex')
          break;
        case "janna":
          setNickname('janna')
          break;
        case "kara":
          setNickname('kara')
          break;
        case "taylor":
          setNickname('taylor')
          break;
        case "david":
          setNickname('david')
          break;
        case "heather":
          setNickname('heather')
          break;
        case "kyra":
        case "kyrajo":
        case "kyra jo":
          setNickname('kyra')
          break;
        case "nathan":
        case "nate":
        case "spectate":
        case "spectatenate":
          setNickname('nathan')
          break;
        case "rebecca":
        case "becca":
          setNickname('becca')
          break;
        default:
          setNickname('stranger')
          break;
      }
    }

    function getChibi(firstName) {
      switch(firstName) {
        case "dad":
          return <img className={classes.chibi} src={dad}/>
        case "mom":
          return <img className={classes.chibi} src={mom}/>
        case "alex":
          return <img className={classes.chibi} src={alex}/>
        case "janna":
          return <img className={classes.chibi} src={janna}/>
        case "kara":
          return <img className={classes.chibi} src={kara}/>
        case "taylor":
          return <img className={classes.chibi} src={taylor}/>
        case "david":
          return <img className={classes.chibi} src={david}/>
        case "heather":
          return <img className={classes.chibi} src={heather}/>
        case "kyra":
          return <img className={classes.chibi} src={kyra}/>
        case "nathan":
          return <img className={classes.chibi} src={nathan}/>
        case "becca":
          return <img className={classes.chibi} src={becca}/>
        default:
          return null
      }
    }

    return (
      <Grid container style={{height: intViewportHeight}}>
        <Grid item xs={12} className={classes.container}>
          {!match ? (
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="subtitle1" className={classes.subtitle}>Please demonstrate that you're a Walla or Walla-adjacent</Typography>
              <TextField id="outlined-basic" label="Enter your first name" variant="outlined" onChange={formatName} fullWidth/>
            </Paper>
          ) : (
            <Paper elevation={3} className={classes.paper}>
              <Grid container>
                <Grid item xs={12} md={3} className={classes.chibiContainer}>
                  {getChibi(nickname)}
                </Grid>
                <Grid item xs={12} md={9}>
                  <Typography align="center" variant="h2">
                    Hi, {startCase(nickname)}!
                    <IconButton aria-label="delete" className={classes.icon} onClick={reset} >
                      <CachedIcon fontSize="inherit" />
                    </IconButton>
                  </Typography>
                  <Typography variant="body1" paragraph>Click the button below to rank the vacation options. When you're done, return to this page to go to the shared calendar.</Typography>
                  <Button 
                    variant="contained"
                    target="_blank" 
                    href={"https://www.surveymonkey.com/r/7F79SQV"} 
                    fullWidth 
                    className={classes.firstButton}
                  >
                    Step 1: Take the survey
                  </Button>
                  <Button 
                    variant="contained" 
                    href={"https://www.when2meet.com/?9061061-Bcw3L"} 
                    target="_blank"
                    fullWidth 
                    className={classes.secondButton}
                  >
                    Step 2: Block out availability
                  </Button>
                  <Button 
                    href="https://docs.google.com/presentation/d/1G6J6px4iZfeG6UUT8MwhF1lIRHVrquYOz9Q1woj8zBU/edit?usp=sharing" 
                    target="_blank"
                    variant="contained"
                    fullWidth
                    className={classes.thirdButton}
                  >
                    Review the slideshow
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          )}
        </Grid>
      </Grid>
    );
}
