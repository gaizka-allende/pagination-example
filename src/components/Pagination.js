import React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  typography: {
    fontSize: '0.75rem',
    fontWeight: '400',
  },
  pageSelect: {
    fontSize: '0.75rem',
    fontWeight: '400',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  menuItem: {
    fontSize: '0.75rem',
    fontWeight: '400',
  },
});

const Pagination = React.memo(({
  classes,
  currentPage,
  pageCount,
  onPageSelect,
}) => (
  <React.Fragment>
    <CssBaseline />
    <Grid
      item
      className={classes.container}
    >
      <Typography
        className={classes.typography}
      >
        {'Page'}
      </Typography>
      <Select
        className={classes.pageSelect}
        value={currentPage}
        onChange={onPageSelect}
        inputProps={{
          name: 'currenPage',
          id: 'currentPage',
        }}
      >
        {
          new Array(pageCount)
            .fill({})
            .map(
              (emptyObject, index) => (
                <MenuItem
                  className={classes.menuItem}
                  // eslint-disable-next-line react/no-array-index-key
                  key={`pageNumber ${index}`}
                  value={index + 1}
                >
                  { index + 1 }
                </MenuItem>
              ),
            )
        }
      </Select>
      <Typography
        className={classes.typography}
      >
        {`of ${pageCount}`}
      </Typography>
    </Grid>
  </React.Fragment>
));

Pagination.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string,
    typography: PropTypes.string,
    pageSelect: PropTypes.string,
    menuItem: PropTypes.string,
  }).isRequired,
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  onPageSelect: PropTypes.func.isRequired,
};

export default withStyles(styles)(Pagination);
