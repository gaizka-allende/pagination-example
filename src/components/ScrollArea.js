import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  scrollArea: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    maxWidth: '100%',
    maxHeight: 500,
    overflowY: 'auto',
    overflowX: 'auto',
  },
});

function ScrollArea({
  classes,
  children,
  cssProps,
}) {
  const {
    marginTop,
    marginBottom,
    maxWidth,
    maxHeight,
    overflowY,
    overflowX,
    padding,
  } = cssProps;
  return (
    <div
      className={classes.scrollArea}
      style={{
        ...marginTop && { marginTop },
        ...marginBottom && { marginBottom },
        ...maxWidth && { maxWidth },
        ...maxHeight && { maxHeight },
        ...overflowY && { overflowY },
        ...overflowX && { overflowX },
        ...padding && { padding },
      }}
    >
      { children }
    </div>
  );
}

ScrollArea.propTypes = {
  classes: PropTypes.shape({
    scrollArea: PropTypes.string,
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.shape(
      React.Node,
    ),
    PropTypes.arrayOf(
      PropTypes.shape(
        React.Node,
      ),
    ),
  ]).isRequired,
  cssProps: PropTypes.shape({
    marginTop: PropTypes.number,
    marginBottom: PropTypes.number,
    maxWidth: PropTypes.string,
    maxHeight: PropTypes.number,
    overflowY: PropTypes.string,
    overflowX: PropTypes.string,
  }),
};

ScrollArea.defaultProps = {
  cssProps: {},
};

export default withStyles(styles)(ScrollArea);
