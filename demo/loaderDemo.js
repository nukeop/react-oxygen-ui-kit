import React from 'react';

import {
  Column, Row, Loader
} from '../src';

const LoaderDemo = () => {
  return(
    <Column>
      <table class="oxygen">
        <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code className="oxygen">type</code></td>
            <td>string (loader1-loader6)</td>
            <td>Selects loader animation.</td>
          </tr>
        </tbody>
      </table>

      <Row style={{margin: '0.5em'}}>
        Below are all available types.
      </Row>

      <Row style={{flexFlow: 'row wrap', margin: '0.5em'}}>
        <Loader />
        <Loader type='loader2' />
        <Loader type='loader3' />
        <Loader type='loader4' />
        <Loader type='loader5' />
        <Loader type='loader6' />
      </Row>
    </Column>
  );
};

export default LoaderDemo;
