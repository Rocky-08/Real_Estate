import React from "react";
import { Button, Container, FormControl } from "@material-ui/core";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterBox from "./FilterBox";

const FilterFeature = (prop) => {
  return (
    <>
      <main>
        <Container>
          <Container align="center">
            <h3>
              Search PG's by Filters
              <Button style={{ color: "black" }} onClick={prop.openFilterBox}>
                <FilterListIcon />
              </Button>
            </h3>
          </Container>

          {prop.filter && (
            <Container maxWidth="md">
              <FilterBox />
            </Container>
          )}
        </Container>
      </main>
    </>
  );
};

export default FilterFeature;
