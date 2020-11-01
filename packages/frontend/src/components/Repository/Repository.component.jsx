import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Star from '@material-ui/icons/Star';
import OpenInNew from '@material-ui/icons/OpenInNew';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 250
  }
});

function Repository({ id, name, description, language, stars, url, isFork }) {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <CardHeader
        avatar={
          <Badge badgeContent={stars || 0} color="primary" className={classes.stars}>
            <Star />
          </Badge>
        }
        action={
          <IconButton aria-label="open-repo" href={url} target="_blank">
            <OpenInNew />
          </IconButton>
        }
        title={name}
        subheader={`${language || 'Language unknown'} ${isFork ? '(fork)' : ''}`}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Repository;
