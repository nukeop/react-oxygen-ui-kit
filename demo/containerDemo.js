import React from 'react';
import Lorem from 'react-lorem-component';

import {
  Column, Row, Container
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

      Container is a wrapper that renders its children in a limited
      width box. <br /><br />

      Standard container:
      <Container><Lorem count={3} /></Container>

      Narrow container:
      <Container narrow>
	<h2>Header</h2>
	<Lorem count={3} />
      </Container>

      Justified container:
      <Container style={{textAlign: 'justify'}}>
	<Lorem paragraphLowerBound={9} count={3} />
      </Container>
      
    </Column>
  );
};

export default ContainerDemo;
