import React from 'react';

import {
  Column, Row, Container
} from '../src';

const RowDemo = () => {
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
	    <td><code className="oxygen">grow</code></td>
	    <td>number</td>
	    <td>Controls the relative proportions of the
	      row. Equivalent of setting <code className="oxygen">flex-grow</code>.</td>
	  </tr>

	  <tr>
	    <td><code className="oxygen">shrink</code></td>
	    <td>number</td>
	    <td>Controls the relative proportions of the
	      row. Equivalent of setting <code className="oxygen">flex-shrink</code>.</td>
	  </tr>

	  <tr>
	    <td><code className="oxygen">children</code></td>
	    <td>node</td>
	    <td>Primary content.</td>
	  </tr>
	</tbody>
      </table>

      Rows form the basis of the flexible layout in this UI kit. They
      can be combined with Columns to create all sorts of grids, and
      arrangements of page content.

      <span style={{marginBottom: '1em'}}>One row filling its column:</span>
      <Row style={{margin: '2rem 0 0.5rem 0'}}>
	<Column>
	  <Row grow={1} style={{
		 background: '#3498db', padding: '1rem', margin:
		 '0.5rem 0', color: '#ecf0f1', justifyContent: 'center' 
	       }}>
	    100%
	  </Row>
	</Column>
      </Row>

      <span style={{marginBottom: '1em'}}>
	Two rows each taking 50% of the column (not counting the
	padding):
      </span>
      <Row style={{margin: '2rem 0 0.5rem 0'}}>
	<Column>
	  <Row grow={1} style={{
		 background: '#3498db', padding: '1rem', margin:
		 '0.5rem 0', color: '#ecf0f1', justifyContent: 'center' 
	       }}>
	    50%
	  </Row>
	  <Row grow={1} style={{
		 background: '#3498db', padding: '1rem', margin:
		 '0.5rem 0', color: '#ecf0f1', justifyContent: 'center' 
	       }}>
	    50%
	  </Row>
	</Column>
      </Row>

      <span style={{marginBottom: '1em'}}>
	Five rows each taking 20% of the column:
      </span>

      <Row style={{margin: '2rem 0 0.5rem 0'}}>
	<Column>
	  <Row grow={1} style={{
		 background: '#3498db', padding: '1rem', margin:
		 '0.5rem 0', color: '#ecf0f1', justifyContent: 'center' 
	       }}>
	    20%
	  </Row>
	  <Row grow={1} style={{
		 background: '#3498db', padding: '1rem', margin:
		 '0.5rem 0', color: '#ecf0f1', justifyContent: 'center' 
	       }}>
	    20%
	  </Row>
	  <Row grow={1} style={{
		 background: '#3498db', padding: '1rem', margin:
		 '0.5rem 0', color: '#ecf0f1', justifyContent: 'center' 
	       }}>
	    20%
	  </Row>
	  <Row grow={1} style={{
		 background: '#3498db', padding: '1rem', margin:
		 '0.5rem 0', color: '#ecf0f1', justifyContent: 'center' 
	       }}>
	    20%
	  </Row>
	  <Row grow={1} style={{
		 background: '#3498db', padding: '1rem', margin:
		 '0.5rem 0', color: '#ecf0f1', justifyContent: 'center' 
	       }}>
	    20%
	  </Row>
	</Column>
      </Row>
    </Column>
  );
};

export default RowDemo;
