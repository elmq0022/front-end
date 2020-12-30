import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { makeStyles } from "@material-ui/core/styles";

const HomePage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={3}>
          <Container>
            <img src="/logo512.png" width="100%"></img>
          </Container>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Container>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            placerat lobortis libero, ut rutrum nulla malesuada non. Curabitur
            et tincidunt sem, in commodo tortor. Duis fringilla nisi vitae nunc
            imperdiet, rutrum egestas quam mattis. Nulla tincidunt laoreet sem,
            sodales vestibulum eros dictum et. In hac habitasse platea dictumst.
            Nulla sollicitudin mi vel nibh lacinia, id vulputate lorem
            pellentesque. Duis eget libero vitae mauris vulputate condimentum
            sit amet a massa. Donec ac vestibulum augue. Mauris tempor a erat a
            semper. Aenean quis lacus nec arcu congue interdum a tempor augue.
            Cras non sollicitudin ante. In dictum neque nisl, eu scelerisque
            orci dictum a. Aliquam semper finibus aliquam. Morbi turpis lorem,
            feugiat id vestibulum non, ultricies vel libero. Aliquam consectetur
            aliquet lobortis. Suspendisse id fringilla lorem.{" "}
          </Container>
        </Grid>
      </Grid>

      <Grid
        container
        direction={matches ? "column-reverse" : "row"}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={9}>
          <Container>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            placerat lobortis libero, ut rutrum nulla malesuada non. Curabitur
            et tincidunt sem, in commodo tortor. Duis fringilla nisi vitae nunc
            imperdiet, rutrum egestas quam mattis. Nulla tincidunt laoreet sem,
            sodales vestibulum eros dictum et. In hac habitasse platea dictumst.
            Nulla sollicitudin mi vel nibh lacinia, id vulputate lorem
            pellentesque. Duis eget libero vitae mauris vulputate condimentum
            sit amet a massa. Donec ac vestibulum augue. Mauris tempor a erat a
            semper. Aenean quis lacus nec arcu congue interdum a tempor augue.
            Cras non sollicitudin ante. In dictum neque nisl, eu scelerisque
            orci dictum a. Aliquam semper finibus aliquam. Morbi turpis lorem,
            feugiat id vestibulum non, ultricies vel libero. Aliquam consectetur
            aliquet lobortis. Suspendisse id fringilla lorem.{" "}
          </Container>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Container>
            <img src="/logo512.png" width="100%" height="100%"></img>
          </Container>
        </Grid>
      </Grid>

      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={3}>
          <Container>
            <img src="/logo512.png" width="100%"></img>
          </Container>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Container>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            placerat lobortis libero, ut rutrum nulla malesuada non. Curabitur
            et tincidunt sem, in commodo tortor. Duis fringilla nisi vitae nunc
            imperdiet, rutrum egestas quam mattis. Nulla tincidunt laoreet sem,
            sodales vestibulum eros dictum et. In hac habitasse platea dictumst.
            Nulla sollicitudin mi vel nibh lacinia, id vulputate lorem
            pellentesque. Duis eget libero vitae mauris vulputate condimentum
            sit amet a massa. Donec ac vestibulum augue. Mauris tempor a erat a
            semper. Aenean quis lacus nec arcu congue interdum a tempor augue.
            Cras non sollicitudin ante. In dictum neque nisl, eu scelerisque
            orci dictum a. Aliquam semper finibus aliquam. Morbi turpis lorem,
            feugiat id vestibulum non, ultricies vel libero. Aliquam consectetur
            aliquet lobortis. Suspendisse id fringilla lorem.{" "}
          </Container>
        </Grid>
      </Grid>

      <Grid
        container
        direction={matches ? "column-reverse" : "row"}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={9}>
          <Container>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            placerat lobortis libero, ut rutrum nulla malesuada non. Curabitur
            et tincidunt sem, in commodo tortor. Duis fringilla nisi vitae nunc
            imperdiet, rutrum egestas quam mattis. Nulla tincidunt laoreet sem,
            sodales vestibulum eros dictum et. In hac habitasse platea dictumst.
            Nulla sollicitudin mi vel nibh lacinia, id vulputate lorem
            pellentesque. Duis eget libero vitae mauris vulputate condimentum
            sit amet a massa. Donec ac vestibulum augue. Mauris tempor a erat a
            semper. Aenean quis lacus nec arcu congue interdum a tempor augue.
            Cras non sollicitudin ante. In dictum neque nisl, eu scelerisque
            orci dictum a. Aliquam semper finibus aliquam. Morbi turpis lorem,
            feugiat id vestibulum non, ultricies vel libero. Aliquam consectetur
            aliquet lobortis. Suspendisse id fringilla lorem.{" "}
          </Container>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Container>
            <img src="/logo512.png" width="100%" height="100%"></img>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
