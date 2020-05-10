import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import SearchResults from './components/SearchResults/SearchResults';

const styles = () => ({
  app: {
    maxWidth: '80%',
    margin: '100px auto 0 auto',
  },
});

const App = ({
  classes,
}) => (
  <div className={classes.app}>
    <SearchResults />
  </div>
);

export default withStyles(styles)(App);
