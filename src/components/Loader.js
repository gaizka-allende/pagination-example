import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  container: {
    margin: 'auto auto',
    display: 'flex',
    flexDirection: 'column',
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 2}px`,
    height: theme.spacing.unit * 40,
    width: theme.spacing.unit * 40,
  },
  circularProgress: {
    margin: 'auto auto',
    alignSelf: 'center',
  },
});

const Loader = ({
  classes,
}) => (
  <Dialog
    open
    BackdropProps={{
      classes: {
        root: classes.root,
      },
    }}
    PaperProps={{
      style: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
    }}
  >
    <DialogContent>
      <div
        className={classes.container}
        data-testid="loader"
      >
        <Fade
          in
          unmountOnExit
        >
          <CircularProgress
            size={120}
            className={classes.circularProgress}
            classses={{
              circle: classes.circle,
            }}
          />
        </Fade>
      </div>
    </DialogContent>
  </Dialog>
);

Loader.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string,
    circularProgress: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(Loader);
