import React from 'react';

import {
  Column, Row
} from '../src';

const ColumnDemo = () => {
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
	      column. Equivalent of setting <code className="oxygen">flex-grow</code>.</td>
	  </tr>

	  <tr>
	    <td><code className="oxygen">shrink</code></td>
	    <td>number</td>
	    <td>Controls the relative proportions of the
	      column. Equivalent of setting <code className="oxygen">flex-shrink</code>.</td>
	  </tr>

	  <tr>
	    <td><code className="oxygen">children</code></td>
	    <td>node</td>
	    <td>Primary content.</td>
	  </tr>
	</tbody>
	
      </table>
      
      The Column component provides a flexible column for your
      content. It can be configured to automatically expand to take
      available space. Columns can be placed side by side to divide
      available space appropriately. They can also take the minimum
      space as required by content.

      <Row style={{margin: '2rem 0 0.5rem 0'}}>
	<Column grow={1} style={{background: '#3498db', padding: '1rem',
		margin: '0 1rem', color: '#ecf0f1', alignItems: 'center'}}>
	  100%
	</Column>
      </Row>
      
      <Row style={{margin: '0.5rem 0'}}>
	<Column grow={1} style={{background: '#3498db', padding: '1rem',
		margin: '0 1rem', color: '#ecf0f1', alignItems: 'center'}}>
	  50%
	</Column>
	<Column grow={1} style={{background: '#3498db', padding: '1rem',
		margin: '0 1rem', color: '#ecf0f1', alignItems: 'center'}}>
	  50%
	</Column>
      </Row>

      <Row style={{margin: '0.5rem 0'}}>
	<Column grow={1} style={{background: '#3498db', padding: '1rem',
		margin: '0 1rem', color: '#ecf0f1', alignItems: 'center'}}>
	  33%
	</Column>
	<Column grow={1} style={{background: '#3498db', padding: '1rem',
		margin: '0 1rem', color: '#ecf0f1', alignItems: 'center'}}>
	  33%
	</Column>
	<Column grow={1} style={{background: '#3498db', padding: '1rem',
		margin: '0 1rem', color: '#ecf0f1', alignItems: 'center'}}>
	  33%
	</Column>
      </Row>
      
      <Row style={{margin: '0.5rem 0 2rem 0'}}>
	<Column grow={1} style={{background: '#3498db', padding: '1rem',
		margin: '0 1rem', color: '#ecf0f1', alignItems: 'center'}}>
	  25%
	</Column>
	<Column grow={1} style={{background: '#3498db', padding: '1rem',
		margin: '0 1rem', color: '#ecf0f1', alignItems: 'center'}}>
	  25%
	</Column>
	<Column grow={1} style={{background: '#3498db', padding: '1rem',
		margin: '0 1rem', color: '#ecf0f1', alignItems: 'center'}}>
	  25%
	</Column>
	<Column grow={1} style={{background: '#3498db', padding: '1rem',
		margin: '0 1rem', color: '#ecf0f1', alignItems: 'center'}}>
	  25%
	</Column>
      </Row>

      The grow and shrink properties can be used to control the
      relative proportions of the columns.

      <Row style={{margin: '2rem 0 0.5rem 0'}}>
	<Column grow={2} style={{background: '#3498db', padding: '1rem',
		margin: '0 1rem', color: '#ecf0f1', alignItems: 'center'}}>
	  66%
	</Column>
	<Column grow={1} style={{background: '#3498db', padding: '1rem',
		margin: '0 1rem', color: '#ecf0f1', alignItems: 'center'}}>
	  33%
	</Column>
      </Row>

      <Row style={{margin: '0.5rem 0'}}>
	<Column grow={1} style={{background: '#3498db', padding: '1rem',
		margin: '0 1rem', color: '#ecf0f1', alignItems: 'center'}}>
	  25%
	</Column>
	<Column grow={2} style={{background: '#3498db', padding: '1rem',
		margin: '0 1rem', color: '#ecf0f1', alignItems: 'center'}}>
	  50%
	</Column>
	<Column grow={1} style={{background: '#3498db', padding: '1rem',
		margin: '0 1rem', color: '#ecf0f1', alignItems: 'center'}}>
	  25%
	</Column>
      </Row>
    </Column>
  );
};

export default ColumnDemo;
