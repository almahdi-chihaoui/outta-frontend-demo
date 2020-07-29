/* Third party imports */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

/* UI Components */
import {
  Paper, Typography,
} from '@material-ui/core';

import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  cover: {
    alignSelf: 'center',
  },
  desc: {
    padding: theme.spacing(2),
  },
  img: {
    width: '100%',
    height: 410,
    objectFit: 'cover',
  },
  title: {
    marginBottom: 5,
  },
}));

const Cover = (props) => {
  const classes = useStyles();

  const {
    description,
    img,
    isLoading,
    title,
  } = props;

  return (
    <>
      <Paper className={classes.cover} square>
        {isLoading ? (
          <Skeleton animation="wave" variant="rect" className={classes.img} />
        ) : (
          <img
            className={classes.img}
            alt=""
            src={img}
          />
        )}

        {isLoading ? (
          <div className={classes.desc}>
            <Skeleton animation="wave" width="60%" className={classes.title} />
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </div>
        ) : (
          <div className={classes.desc}>
            <Typography variant="h4" className={classes.title}>{title}</Typography>
            <Typography variant="body1">{description}</Typography>
          </div>
        )}

      </Paper>
    </>
  );
};

Cover.propTypes = {
  description: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
};

Cover.defaultProps = {
  description: '',
  img: '',
  isLoading: false,
};

export default Cover;
