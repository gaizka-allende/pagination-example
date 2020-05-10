import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const styles = () => ({
  textInput: {
    display: 'flex',
    alignItems: 'end',
  },
});

const TextInput = ({
  classes,
  onSearch,
}) => {
  const [value, setValue] = useState('');
  return (
    <div className={classes.textInput}>
      <TextField
        id="textSearch"
        label="Book Search Text"
        value={value}
        onChange={
          event => setValue(event.target.value)
        }
      />
      <Button
        onClick={
          () => {
            onSearch(value);
          }
        }
      >
        {'Search'}
      </Button>
    </div>
  );
}

TextInput.propTypes = {
  onSearch: PropTypes.func,
};

export default withStyles(styles)(TextInput);
