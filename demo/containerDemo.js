import React from 'react';
import Lorem from 'react-lorem-component';

import {
  Column, Row, Container, Well
} from '../src';

const ContainerDemo = () => {
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
	    <td><code className="oxygen">children</code></td>
	    <td>number</td>
	    <td>Primary content.</td>
	  </tr>
	</tbody>
      </table>

      <span style={{marginBottom: '0.25em'}}>
	Container is a wrapper that renders its children in a
	limited	width box.
      </span>

      <span style={{marginBottom: '1em'}}>Standard container:</span>
      
      <Well>
	<Container>
	  <Lorem paragraphLowerBound={9} count={3} />
	</Container>
      </Well>

      <span style={{marginBottom: '1em'}}>Narrow container:</span>
      
      <Well>
	<Container narrow>
	  <h2>Header</h2>
	  <Lorem count={3} />
	</Container>
      </Well>

      <span style={{marginBottom: '1em'}}>Justified container:</span>
      
      <Well>
	<Container narrow style={{textAlign: 'justify'}}>
	  <Lorem paragraphLowerBound={9} count={3} />
	</Container>
      </Well>
      
    </Column>
  );
};

export default ContainerDemo;
