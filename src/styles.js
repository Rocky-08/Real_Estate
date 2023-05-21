import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  text: {
    color: 'black',
    fontWeight: "bold",
    marginTop: "30px"
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',

  },
  cardMedia: {
    paddingTop: "56.25%",
    cusror: "initial"
  },
  cardContent: {
    backgroundColor: 'white',
    color: 'black'
  }
}));

export default useStyles;