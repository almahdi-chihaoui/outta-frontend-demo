/* Third party imports */
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

/* UI components */
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';

import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles({
  root: {
    // minWidth: 480,
  },
  media: {
    height: 240,
  },
});

const EventCard = (props) => {
  const classes = useStyles();
  const {
    event,
    isLoading,
    onEventClick,
  } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => { onEventClick(event.id); }}>
        {isLoading ? (
          <Skeleton animation="wave" variant="rect" className={classes.media} />
        ) : (
          <CardMedia
            className={classes.media}
            image={event.img}
            title=""
          />
        )}
        <CardContent>
          {isLoading ? (
            <>
              <Skeleton animation="wave" width="60%" style={{ marginBottom: 12 }} />
              <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={10} width="80%" />
            </>
          ) : (
            <>
              <Typography gutterBottom variant="h5" component="h2">
                {event.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {event.description}
              </Typography>
            </>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {isLoading ? (
          <>
            <Skeleton animation="wave" width="30%" style={{ marginBottom: 12 }} />
          </>
        ) : (
          <>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  isLoading: PropTypes.bool,
  onEventClick: PropTypes.func.isRequired,
};

EventCard.defaultProps = {
  isLoading: false,
};

export default EventCard;
