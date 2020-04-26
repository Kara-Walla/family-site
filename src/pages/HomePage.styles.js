import { makeStyles } from '@material-ui/core/styles'
import { mountains, lake } from '../images';
import { white } from 'color-name';

const useStyles = makeStyles({
  banner: {
    padding: 50,
    backgroundImage: 'url('+mountains+')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  /*secondBanner: {
    padding: 50,
    backgroundImage: 'url('+lake+')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
  },*/
  text: {
    color: 'rgb('+white+')',
    textShadow: '2px 2px #000000',
  },
  firstButton: {
    marginTop: '20px',
    backgroundColor: '#03213bff',
    color: 'rgb(' + white + ')',
  },
  secondButton: {
    marginTop: '20px',
    backgroundColor: '#0083B0',
    color: 'rgb(' + white + ')',
  },
  link: {
    textDecoration: 'none'
  },
  centerContents: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default useStyles
