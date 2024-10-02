import { createElement } from 'react';

export default function Table({ data, columns }) {
  return createElement('table', {}, [
    createElement('thead', {}, [
      createElement('tr', {}, columns.map(column => createElement('th', {}, column)))
    ]),
    createElement('tbody', {}, data.map(row => {
      return createElement('tr', {}, columns.map(column => {
        return createElement('td', {}, row[column]);
      }));
    })),
  ]);
}