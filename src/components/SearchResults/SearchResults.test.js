import React from 'react';
import { waitFor } from '@testing-library/dom';
import { render } from '@testing-library/react';
//import fetchMock from 'fetch-mock';

import SearchResults from './SearchResults';

describe('SearchResults', () => {

  /*afterEach(
    () => {
      fetchMock.restore();
      fetchMock.reset();
    }
  );*/

  test('renders loader', () => {
    const { getByTestId } = render(<SearchResults />);
    expect(getByTestId('loader')).toBeInTheDocument();
  });

  xtest('renders error', async () => {
    delete global.fetch;
    global.fetch = () => {
      return Promise.resolve({
        ok: false,
        status: 403,
        json: () => Promise.resolve([]),
      });
    };
    const {getByText} = render(<SearchResults />);
    await waitFor(
      () => expect(getByText(/error/i)).toBeInTheDocument(),
    );
  });

  xtest('renders results', async () => {
    /*delete global.fetch;
    global.fetch = () => {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(
          JSON.stringify({
            data: [],
          }),
        ),
        body: JSON.stringify({ success: true }),
      });
    };*/
    /*fetchMock.mock(
      '*',
      {
        returnedData: '{ success: true }',
        status: 200,
        body: { success: false },
      },
    );*/
    /*global.fetch = jest.fn().mockImplementation(
      () => {
        return Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(
            JSON.stringify({
              data: [],
            }),
          ),
        })
      },
    );*/
    /*global.fetch = () => Promise.resolve({ json: () => Promise.resolve([]) })

    const {debug, getByText} = render(<SearchResults />);
    debug();
    await waitFor(
      () => expect(getByText(/results/i)).toBeInTheDocument(),
    );*/
  });

});
