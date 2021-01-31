import React from "react";

import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Accordian from "@material-ui/core/Accordion";
import AccordianDetails from "@material-ui/core/AccordionDetails";
import AccordianSummary from "@material-ui/core/AccordionSummary";
import { CenterFocusStrongOutlined } from "@material-ui/icons";

const SearchBar = (props) => {
  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={(e) => {
        props.handleSearchSubmit(e);
      }}
    >
      <TextField
        label="Search"
        variant="outlined"
        value={props.value}
        onChange={(e) => props.handleSearchChange(e)}
      />
    </form>
  );
};

const ArticleTag = (props) => {
  return (
    <MenuItem>
      <FormControlLabel
        control={
          <Checkbox
            checked={props.checked}
            color="primary"
            onChange={(e) => props.onChange(e, props.pk)}
          />
        }
        label={props.name}
      />
    </MenuItem>
  );
};

const Date = (props) => {
  return <MenuItem>{props.date}</MenuItem>;
};

const BlogMenu = (props) => {
  const articleTags = props.tags.map((tag) => {
    return (
      <ArticleTag
        key={tag.pk}
        pk={tag.pk}
        name={tag.name}
        checked={tag.checked}
        onChange={props.handleTagChange}
      />
    );
  });

  return (
    <React.Fragment>
      <MenuItem>
        <SearchBar
          handleSearchChange={props.handleSearchChange}
          handleSearchSubmit={props.handleSearchSubmit}
        />
      </MenuItem>
      <Accordian elevation={0}>
        <AccordianSummary>Tags</AccordianSummary>
        <AccordianDetails>
          <MenuList>{articleTags}</MenuList>
        </AccordianDetails>
      </Accordian>
      <MenuItem>Dates</MenuItem>
    </React.Fragment>
  );
};

export default BlogMenu;
