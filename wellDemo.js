import React from 'react';

import {
  Column, Row, Well
} from '../src';

const WellDemo = () => {
  return (
    <Column>
      <table className="oxygen">
        <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code className="oxygen">style</code></td>
            <td>object</td>
            <td>Works the same way as a regular style property in React.</td>
          </tr>
          <tr>
            <td><code className="oxygen">small</code></td>
            <td>bool</td>
            <td>Results in smaller padding.</td>
          </tr>
          <tr>
            <td><code className="oxygen">large</code></td>
            <td>bool</td>
            <td>Results in larger padding.</td>
          </tr>
          <tr>
            <td><code className="oxygen">children</code></td>
            <td>node</td>
            <td>Primary content</td>
          </tr>
        </tbody>
      </table>

      Well is an area where content can be placed in order to separate
      it from the surrounding area explicitly.

      <Well>This is a well.</Well>
      <Well small>This is a small well.</Well>
      <Well large>This is a large well.</Well>
    </Column>
  );
};

export default WellDemo;
