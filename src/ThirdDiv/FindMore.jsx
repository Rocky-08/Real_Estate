import React from "react";
import { Container, Typography, Grid, Button } from "@material-ui/core";
import useStyles from "../styles";
import { Search } from "@material-ui/icons";
const FindMore = () => {
  const classes = useStyles();
  return (
    <>
      <main
        style={{
          padding: "3rem",
          backgroundColor: "#fff59e",
          marginTop: "3rem",
        }}
      >
        <Container maxWidth="lg">
          <div>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} md={6} sm={6} style={{ marginTop: "4rem" }}>
                <Typography variant="h4" style={{ fontWeight: "bold" }}>
                  Explore Room As Per Your Needs
                </Typography>

                <Button
                  variant="contained"
                  style={{
                    borderRadius: "30rem",
                    backgroundColor: "Orange",
                    color: "black",
                    marginTop: "4rem",
                    fontWeight: "bold",
                  }}
                >
                  <Search />
                  Find Now
                </Button>
              </Grid>

              <Grid item align="left">
                <img
                  style={{ height: "50vh", borderRadius: "30rem" }}
                  src="https://img.freepik.com/free-vector/cute-people-playing-laptop-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4043.jpg?w=740&t=st=1684736430~exp=1684737030~hmac=eb0ab9f09031d4f0f2abe0b4a3ced25e7b871ecd9460612d58ec23203db4c5fa"
                />
              </Grid>
            </Grid>
          </div>
        </Container>
      </main>
    </>
  );
};

export default FindMore;
