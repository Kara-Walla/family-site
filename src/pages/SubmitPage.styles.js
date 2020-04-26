import { makeStyles } from '@material-ui/core/styles'
import { mountains, lake } from '../images';
import { white, lightgray } from 'color-name';

const useStyles = makeStyles({
  container: {
  },
  subtitle: {
    marginBottom: 10
  },
  paper: {
    padding: 50,
    marginTop: 50,
  },
  chibi: {
    width:'100%',
    height:'100%',
    objectFit: 'scale-down',
    overflow: 'hidden',
  },
  chibiContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: 50,
  },
  icon: {
    color: '#03213bff',
    backgroundColor: 'rgb(' + lightgray + ')',
    marginLeft: 10,
  },
  firstButton: {
    marginBottom: 30,
    backgroundColor: '#03213bff',
    color: 'rgb(' + white + ')',
  },
  secondButton: {
    marginBottom: 30,
    backgroundColor: '#0083B0',
    color: 'rgb(' + white + ')',
  },
  thirdButton: {
  },
  fourthButton: {
  },
})

export default useStyles
