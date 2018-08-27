import React from 'react';

import {
  Column,
  Row,
  Container,
  Well,
  Sidebar,
  SidebarContent,
  SidebarEntry,
  SidebarLabel
} from '../src';

const firstEntry = <Column>First entry</Column>;
const secondEntry = <Column>Second entry</Column>;

const SidebarDemo = () => {
  return (
    <Column>
      <h3>Sidebar</h3>
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
            <td><code className="oxygen">sticky</code></td>
            <td>bool</td>
            <td>Makes the sidebar stick to viewport.</td>
          </tr>
          <tr>
            <td><code className="oxygen">sections</code></td>
            <td>array</td>
            <td>An array of sections that should be listed in the sidebar.</td>
          </tr>
        </tbody>
      </table>

      <h3>SidebarContent</h3>
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
            <td><code className="oxygen">children</code></td>
            <td>node</td>
            <td>Primary content.</td>
          </tr>
        </tbody>
      </table>
      
      <h3>SidebarEntry</h3>
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
            <td><code className="oxygen">onClick</code></td>
            <td>function</td>
            <td>What happens when this entry is clicked.</td>
          </tr>
          <tr>
            <td><code className="oxygen">children</code></td>
            <td>node</td>
            <td>Primary content.</td>
          </tr>
        </tbody>
      </table>
      
      <h3>SidebarLabel</h3>
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
            <td><code className="oxygen">children</code></td>
            <td>node</td>
            <td>Primary content.</td>
          </tr>
        </tbody>
      </table>

      <Row style={{marginBottom: '0.5em'}}>
        A Sidebar lets you create a menu with sections and clickable
        entries that can show different content after being
        selected. The primary example of a sidebar is this demo page,
        with sections and entries allowing users to select demos for
        different components.
      </Row>

      <Row style={{marginBottom: '0.5em'}}>
        Only the Sidebar component should be used directly, it uses the
        other secondary components to create its layout.
      </Row>

      <Row style={{marginBottom: '2em'}}>Standard sidebar:</Row>
      <Row>
        <Container>
          <Row>
            <Sidebar
              sections={[
                {
                  label: 'Section 1',
                  entries: [
                    {title: 'Entry 1', element: firstEntry},
                    {title: 'Entry 2', element: secondEntry}
                  ]
                },
                {
                  label: 'Section 2',
                  entries: [
                    {title: 'Entry 1', element: firstEntry},
                    {title: 'Entry 2', element: secondEntry}
                  ]
                },
                {
                  label: 'Section 3',
                  entries: [
                    {title: 'Entry 1', element: firstEntry},
                    {title: 'Entry 2', element: secondEntry}
                  ]
                }
              ]}
              />
          </Row>
        </Container>
      </Row>

      <Row style={{marginTop: '2em'}}>
        A sidebar can also stick to the viewport. To see this
        behavior, scroll down on one of the longer demos on this page.
      </Row>
    </Column>
  );
};

export default SidebarDemo;
