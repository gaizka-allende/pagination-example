import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const styles = () => ({
  pageSize: {
    display: 'flex',
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  select: {
    marginLeft: 10,
    fontSize: '0.75rem',
    fontWeight: '400',
  },
  typography: {
    fontSize: '0.75rem',
    fontWeight: '400',
  },
  menuItem: {
    fontSize: '0.75rem',
    fontWeight: '400',
  },
});

const PageSizeSelect = ({
  classes,
  pageSize,
  onChange,
}) => (
  <div className={classes.pageSize}>
    <Typography className={classes.typography}>
      {'Page size'}
    </Typography>
    <Select
      className={classes.select}
      value={pageSize}
      onChange={onChange}
      inputProps={{
        name: 'pageSize',
        id: 'pageSize',
      }}
    >
      <MenuItem
        className={classes.menuItem}
        value={25}
      >
        {'25'}
      </MenuItem>
      <MenuItem
        className={classes.menuItem}
        value={50}
      >
        {'50'}
      </MenuItem>
      <MenuItem
        className={classes.menuItem}
        value={75}
      >
        {'75'}
      </MenuItem>
      <MenuItem
        className={classes.menuItem}
        value={100}
      >
        {'100'}
      </MenuItem>
    </Select>
  </div>
);

PageSizeSelect.propTypes = {
  classes: PropTypes.shape({
    pageSize: PropTypes.string,
    select: PropTypes.string,
    typography: PropTypes.string,
    menuItem: PropTypes.string,
  }).isRequired,
  pageSize: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(PageSizeSelect);
