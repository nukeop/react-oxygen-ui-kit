import React from 'react';

import {
  Background,
  Column,
  Row,
  Container,
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter
} from '../src';

const PanelDemo = () => {
  return (
    <Column>
      <h3>Panel</h3>
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
            <td><code className="oxygen">fluid</code></td>
            <td>bool</td>
            <td>
              Determines if the panel should fill the entire width of
              its container.
            </td> 
          </tr>
          <tr>
            <td><code className="oxygen">dark</code></td>
            <td>bool</td>
            <td>Use the dark panel variant.</td>
          </tr>
          <tr>
            <td><code className="oxygen">className</code></td>
            <td>string</td>
            <td>Name of the CSS class to apply to the panel.</td>
          </tr>
          <tr>
            <td><code className="oxygen">children</code></td>
            <td>node</td>
            <td>Primary content.</td>
          </tr>
        </tbody>
      </table>

      <h3>PanelHeader</h3>
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
      
      <h3>PanelBody</h3>
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
            <td><code className="oxygen">row</code></td>
            <td>bool</td>
            <td>Change the alignment from column to row.</td>
          </tr>
          <tr>
            <td><code className="oxygen">className</code></td>
            <td>string</td>
            <td>Name of the CSS class to apply to the panel.</td>
          </tr>
          <tr>
            <td><code className="oxygen">children</code></td>
            <td>node</td>
            <td>Primary content.</td>
          </tr>
        </tbody>
      </table>
      
      <h3>PanelFooter</h3>
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
        Panel offers a separated area for some content, with an
        optional header and footer.
      </Row>

      <Row>
        Standard panels.
      </Row>

      <Row>
        <Panel style={{padding: '1rem'}}>
          This is a panel.
        </Panel>
      </Row>

      <Row>
        <Panel>
          <PanelHeader>This is a header</PanelHeader>
          <PanelBody>This is a body</PanelBody>
          <PanelFooter>This is a footer</PanelFooter>
        </Panel>
      </Row>

      <Row>Panels also have a dark variant.</Row>

      <Row>
        <Panel dark>
          <PanelHeader>This is a header</PanelHeader>
          <PanelBody>This is a body</PanelBody>
          <PanelFooter>This is a footer</PanelFooter>
        </Panel>
      </Row>

      <Row>Panels can be fluid, to fill their entire container.</Row>

      <Row>
        <Panel fluid>
          <PanelBody>This is a fluid panel</PanelBody>
        </Panel>
      </Row>

      <Row>Panels can house any kind of content, including other Oxygen
        components.</Row>

      <Row>
        <Panel style={{padding: '4rem'}}>
            <Background image="https://i.imgur.com/3PvJJw4.jpg" />
        </Panel>

        <Panel style={{padding: '4rem'}}>
          <Background
            color1="#F05F57"
            color2="#360940"
            image="https://i.imgur.com/3PvJJw4.jpg"
          />
        </Panel>

        <Panel style={{padding: '4rem'}}>
          <Background
            color1="#380036"
            color2="#0CBABA"
            image="https://i.imgur.com/3PvJJw4.jpg"
          />
        </Panel>
      </Row>
    </Column>
  );
};

export default PanelDemo;
