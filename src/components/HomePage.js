import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const block = {
  height: "100%",
  backgroundColor: "rgb(252, 252, 252)",
  alignItems: "center",
};

// #f5f5f5 #e8eae3 #373833 #fa2742

const ContentWithImage = (props) => {
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.down("xs"));
  let direction = "row";

  if (props.imageSide === "right") {
    direction = isExtraSmall ? "column" : "row-reverse";
  } else if (props.imageSide === "left") {
    direction = isExtraSmall ? "column" : "row";
  }

  return (
    <Grid container direction={direction} justify="center" spacing={2}>
      <Grid item xs={12} sm={3}>
        <img style={block} src={props.image} width="100%"></img>
      </Grid>
      <Grid item xs={12} sm={9}>
        <div style={block}>
          <Typography>{props.children}</Typography>
        </div>
      </Grid>
    </Grid>
  );
};

const HomePage = () => {
  return (
    <div>
      <ContentWithImage imageSide="left" image="/logo512.png">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        placerat lobortis libero, ut rutrum nulla malesuada non. Curabitur et
        tincidunt sem, in commodo tortor. Duis fringilla nisi vitae nunc
        imperdiet, rutrum egestas quam mattis. Nulla tincidunt laoreet sem,
        sodales vestibulum eros dictum et. In hac habitasse platea dictumst.
        Nulla sollicitudin mi vel nibh lacinia, id vulputate lorem pellentesque.
        Duis eget libero vitae mauris vulputate condimentum sit amet a massa.
        Donec ac vestibulum augue. Mauris tempor a erat a semper. Aenean quis
        lacus nec arcu congue interdum a tempor augue. Cras non sollicitudin
        ante. In dictum neque nisl, eu scelerisque orci dictum a. Aliquam semper
        finibus aliquam. Morbi turpis lorem, feugiat id vestibulum non,
        ultricies vel libero. Aliquam consectetur aliquet lobortis. Suspendisse
        id fringilla lorem.
      </ContentWithImage>

      <ContentWithImage imageSide="right" image="/logo512.png">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        placerat lobortis libero, ut rutrum nulla malesuada non. Curabitur et
        tincidunt sem, in commodo tortor. Duis fringilla nisi vitae nunc
        imperdiet, rutrum egestas quam mattis. Nulla tincidunt laoreet sem,
        sodales vestibulum eros dictum et. In hac habitasse platea dictumst.
        Nulla sollicitudin mi vel nibh lacinia, id vulputate lorem pellentesque.
        Duis eget libero vitae mauris vulputate condimentum sit amet a massa.
        Donec ac vestibulum augue. Mauris tempor a erat a semper. Aenean quis
        lacus nec arcu congue interdum a tempor augue. Cras non sollicitudin
        ante. In dictum neque nisl, eu scelerisque orci dictum a. Aliquam semper
        finibus aliquam. Morbi turpis lorem, feugiat id vestibulum non,
        ultricies vel libero. Aliquam consectetur aliquet lobortis. Suspendisse
        id fringilla lorem.
      </ContentWithImage>

      <ContentWithImage imageSide="left" image="/logo512.png">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        placerat lobortis libero, ut rutrum nulla malesuada non. Curabitur et
        tincidunt sem, in commodo tortor. Duis fringilla nisi vitae nunc
        imperdiet, rutrum egestas quam mattis. Nulla tincidunt laoreet sem,
        sodales vestibulum eros dictum et. In hac habitasse platea dictumst.
        Nulla sollicitudin mi vel nibh lacinia, id vulputate lorem pellentesque.
        Duis eget libero vitae mauris vulputate condimentum sit amet a massa.
        Donec ac vestibulum augue. Mauris tempor a erat a semper. Aenean quis
        lacus nec arcu congue interdum a tempor augue. Cras non sollicitudin
        ante. In dictum neque nisl, eu scelerisque orci dictum a. Aliquam semper
        finibus aliquam. Morbi turpis lorem, feugiat id vestibulum non,
        ultricies vel libero. Aliquam consectetur aliquet lobortis. Suspendisse
        id fringilla lorem.
      </ContentWithImage>

      <ContentWithImage imageSide="right" image="/logo512.png">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        placerat lobortis libero, ut rutrum nulla malesuada non. Curabitur et
        tincidunt sem, in commodo tortor. Duis fringilla nisi vitae nunc
        imperdiet, rutrum egestas quam mattis. Nulla tincidunt laoreet sem,
        sodales vestibulum eros dictum et. In hac habitasse platea dictumst.
        Nulla sollicitudin mi vel nibh lacinia, id vulputate lorem pellentesque.
        Duis eget libero vitae mauris vulputate condimentum sit amet a massa.
        Donec ac vestibulum augue. Mauris tempor a erat a semper. Aenean quis
        lacus nec arcu congue interdum a tempor augue. Cras non sollicitudin
        ante. In dictum neque nisl, eu scelerisque orci dictum a. Aliquam semper
        finibus aliquam. Morbi turpis lorem, feugiat id vestibulum non,
        ultricies vel libero. Aliquam consectetur aliquet lobortis. Suspendisse
        id fringilla lorem.
      </ContentWithImage>
    </div>
  );
};

export default HomePage;
