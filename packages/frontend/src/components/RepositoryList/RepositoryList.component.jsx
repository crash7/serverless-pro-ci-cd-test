import React from 'react';
import Grid from '@material-ui/core/Grid';
import Repository from '../Repository/Repository.component';

function RepositoryList({ repositories }) {
  return (
    <Grid container spacing={2} direction="row" justify="left" alignItems="center">
      {repositories.map(repository => (
        <Grid item xs={12} sm={6} lg={3} key={repository.id}>
          <Repository {...repository} />
        </Grid>
      ))}
    </Grid>
  );
}

export default RepositoryList;
