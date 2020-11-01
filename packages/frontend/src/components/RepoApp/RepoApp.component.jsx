import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import MenuIcon from "@material-ui/icons/Menu";
import useSWR from "swr";
import SearchBar from "../SearchBar/SearchBar.component";
import RepositoryList from "../RepositoryList/RepositoryList.component";

const useStyles = makeStyles({
  repoList: {
    marginTop: 10,
  },
});

function Loading() {
  return (
    <div>
      Loading... <LinearProgress />
    </div>
  );
}

function ErrorMessage() {
  return <div>Error fetching repositories</div>;
}

function RepoApp() {
  const classes = useStyles();
  const [username, setUsername] = React.useState("");
  const { data, error } = useSWR(() =>
    username ? `${process.env.REACT_APP_API_ENDPOINT}/repos/${username}` : null
  );
  const isLoading = !data || data.error;
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Repository view</Typography>
        </Toolbar>
      </AppBar>
      <Box component="div" m={3}>
        <SearchBar value={username} onSearch={(value) => setUsername(value)} />
        <Container className={classes.repoList}>
          {error ? (
            <ErrorMessage />
          ) : isLoading ? (
            <Loading />
          ) : (
            <RepositoryList repositories={data} />
          )}
        </Container>
      </Box>
    </div>
  );
}

export default RepoApp;
