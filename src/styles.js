import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    color: "black",
    fontWeight: "bold",
    marginTop: "30px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
    cusror: "initial",
  },
  cardContent: {
    backgroundColor: "white",
    color: "black",
  },

  FindDiv: {
    padding: "3rem",
    backgroundColor: "#fff59e",
    marginTop: "3rem",
  },

  FindDivButton: {
    borderRadius: "30rem",
    backgroundColor: "Orange",
    color: "black",
    marginTop: "1rem",
    fontWeight: "bold",
  },

  FindDivImg: {
    height: "44vh",
    borderRadius: "30rem",
  },
}));

export default useStyles;
