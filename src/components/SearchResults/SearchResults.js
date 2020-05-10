import React, { useState } from 'react';
import useFetch from 'use-http';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Loader from '../Loader';
import Error from '../Error';
import ScrollArea from '../ScrollArea';
import Table from '../Table/Table';
import PageSizeSelect from '../PageSizeSelect';
import Pagination from '../Pagination';
import TextInput from '../TextInput';

const styles = () => ({
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  noOfResults: {
    display: 'flex',
    alignItems: 'center',
  },
  typography: {
    fontSize: '0.75rem',
    fontWeight: '400',
  },
});

const SearchResults = ({
  classes,
}) => {
  const [pageSize, setPageSize] = useState(25);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const { data = [], error, loading } = useFetch(
    // I add query string even though it's a post because useFetch has a bug
    // and does not refetch if the url does not change
    `${process.env.REACT_APP_API_BASE_URL}/api/books?page=${page}&pageSize=${pageSize}&filters=${searchText}`,
    {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(
        {
          page: 1,
          itemsPerPage: pageSize,
          filters: [{type: "all", values: [searchText]}],
        },
      )
    },
    [pageSize, page, searchText],
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    console.log(error);
    return (
      <Error
        message="Error fetching books"
      />
    );
  }

  const pageCount=(data.count % pageSize) === 0
    ? parseInt(data.count / pageSize, 10) + 1
    : parseInt(data.count / pageSize, 10);


  return (
    <>
      <CssBaseline />
      <TextInput
        onSearch={text => setSearchText(text)}
      />
      <ScrollArea>
        <Table
          data={data.books}
        />
      </ScrollArea>
      <div className={classes.controls}>
        <PageSizeSelect
          pageSize={pageSize}
          onChange={
            event => {
              setPageSize(
                event.target.value,
              )
            }
          }
        />
        {
          data.count && (
            <div className={classes.noOfResults}>
              <Typography
                className={classes.typography}
              >
                { `Results: ${data.count}` }
              </Typography>
            </div>
          )
        }
        <Pagination
          pageCount={pageCount}
          currentPage={page}
          onPageSelect={
            event => setPage(
              event.target.value,
            )
          }
        />
      </div>
    </>
  );
};

export default withStyles(styles)(SearchResults);
