import React from "react";
import { Button, Container } from "@mui/material";
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
              <Button onClick={prop.openFilterBox}>
                <FilterListIcon
                  style={{ color: prop.check ? "white" : "black" }}
                />
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
