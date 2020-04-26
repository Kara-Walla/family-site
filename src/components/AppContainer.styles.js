import { makeStyles } from '@material-ui/core/styles'
import { lightgray } from 'color-name';

const useStyles = makeStyles({
  container: {
    backgroundColor: lightgray,
    padding: 0
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#0083B0',
      outline: '1px solid slategrey'
    }
  }
})

export default useStyles