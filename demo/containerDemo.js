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
	    <td>node</td>
	    <td>Primary content.</td>
	  </tr>
	</tbody>
      </table>

      <Row style={{marginBottom: '0.5em'}}>
	      Container is a wrapper that renders its children in a
	      limited	width box.
      </Row>

      <Row style={{marginBottom: '1em'}}>Standard container:</Row>
      <Row style={{margin: '0.5em'}}>
        <Well>
	        <Container>
	          <Lorem paragraphLowerBound={9} count={3} />
	        </Container>
        </Well>
      </Row>

      <span style={{marginBottom: '1em'}}>Narrow container:</span>

      <Row style={{margin: '0.5em'}}>
        <Well>
	        <Container narrow>
	          <h2>Header</h2>
	          <Lorem count={3} />
	        </Container>
        </Well>
      </Row>
      

      <Row style={{marginBottom: '1em'}}>Justified container:</Row>

      <Row style={{margin: '0.5em'}}>
        <Well>
	        <Container narrow style={{textAlign: 'justify'}}>
	          <Lorem paragraphLowerBound={9} count={3} />
	        </Container>
        </Well>
      </Row>
      
      
    </Column>
  );
};

export default ContainerDemo;
