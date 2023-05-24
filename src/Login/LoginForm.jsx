import React from "react";
import { Box, TextField, Button, Grid, Link } from "@material-ui/core";

const LoginForm = (prop) => {
  return (
    <>
      <Box
        component="form"
        onSubmit={prop.submitFunc}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          required
          variant="outlined"
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />

        <TextField
          margin="normal"
          required
          variant="outlined"
          fullWidth
          id="password"
          label="Password"
          name="password"
          autoComplete="password"
          autoFocus
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          style={{
            backgroundColor: "green",
            color: "white",
            marginTop: "2rem",
          }}
        >
          Login
        </Button>
        <Grid container style={{ marginTop: "2rem" }}>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LoginForm;
