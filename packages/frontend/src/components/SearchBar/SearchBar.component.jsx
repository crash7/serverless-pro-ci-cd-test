import React from 'react';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

function SearchBar({ username, onSearch }) {
  const [value, setValue] = React.useState(username);
  const onSubmit = event => {
    event.preventDefault();
    onSearch(value)
  };

  return (
    <Container>
      <form action="." onSubmit={onSubmit}>
        <FormControl fullWidth variant="filled">
          <InputLabel htmlFor="gh-username">Username</InputLabel>
          <FilledInput
            id="gh-username"
            onChange={(event) => {
              setValue(event.target.value)
            }}
            value={value}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </form>
    </Container>
  );
}

export default SearchBar;
