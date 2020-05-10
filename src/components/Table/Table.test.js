import React from 'react';
import { render } from '@testing-library/react';

import Table from './Table';

describe('Table', () => {
  test(
    'renders',
    () => {
      const { getByText } = render(
        <Table
          data={
            [
              {
                id: 2086,
                book_author: ['Ανώνυμος'],
                book_title: 'Ο Αλέξανδρος ο Μακεδών',
                book_publication_year: 1529,
                book_publication_country: 'Ιταλία',
                book_publication_city: 'Βενετία',
                book_pages: 104
              },
            ]
          }
        />
      );
      expect(getByText(/Title/i)).toBeInTheDocument();
      expect(getByText(/Ο Αλέξανδρος ο Μακεδών/i)).toBeInTheDocument();
      expect(getByText(/Author/i)).toBeInTheDocument();
      expect(getByText(/Ανώνυμος/i)).toBeInTheDocument();
      expect(getByText(/Year/i)).toBeInTheDocument();
      expect(getByText(/1529/i)).toBeInTheDocument();
      expect(getByText(/Pages/i)).toBeInTheDocument();
      expect(getByText(/104/i)).toBeInTheDocument();
    }
  );
});
