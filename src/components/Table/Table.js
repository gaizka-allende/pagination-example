import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = () => ({
  headerCell: {
    fontWeight: 'bold',
    padding: `8px 8px`,
    position: 'sticky',
    top: 0,
    backgroundColor: 'lighgrey',
    zIndex: 1,
    maxWidth: '300px',
  },
  columnWithAnchor: {
    minWidth: '180px',
  },
  bodyCell: {
    padding: `8px 8px`,
    maxWidth: '300px',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: 'grey',
    },
  },
});

const Table = ({
  data,
  classes,
}) => {

  if (data === undefined) {
    return null;
  }

  return (
    <MuiTable>
      <TableHead>
        <TableRow
          key="headerTableRow"
        >
          <TableCell
            key="title"
            className={classes.headerCell}
          >
            Title
          </TableCell>
          <TableCell
            key="author"
            className={classes.headerCell}
          >
            Author
          </TableCell>
          <TableCell
            key="year"
            className={classes.headerCell}
          >
            Year
          </TableCell>
          <TableCell
            key="pages"
            className={classes.headerCell}
          >
            Pages
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          !!(data && data.length) && data.map((item, rowIndex) => (
            <TableRow
              hover
              className={classes.row}
              key={`tableRow_${rowIndex}`}
            >
              <TableCell
                key={`${rowIndex}_title`}
                className={classes.bodyCell}
              >
                {item.book_title}
              </TableCell>
              <TableCell
                key={`${rowIndex}_author`}
                className={classes.bodyCell}
              >
                {item.book_author}
              </TableCell>
              <TableCell
                key={`${rowIndex}_year`}
                className={classes.bodyCell}
              >
                {item.book_publication_year}
              </TableCell>
              <TableCell
                key={`${rowIndex}_pages`}
                className={classes.bodyCell}
              >
                {item.book_pages}
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </MuiTable>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.arrayOf(
    React.Node,
  ).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.shape({
    icon: PropTypes.string,
    headerCell: PropTypes.string,
    bodyCell: PropTypes.string,
    row: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(Table);
