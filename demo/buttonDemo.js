import React from 'react';

import {
  Column, Row, Button
} from '../src';

const ButtonDemo = () => {
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
            <td><code className="oxygen">teal</code></td>
            <td>bool</td>
            <td>Teal-colored button.</td>
          </tr>
          <tr>
            <td><code className="oxygen">green</code></td>
            <td>bool</td>
            <td>Green-colored button.</td>
          </tr>
          <tr>
            <td><code className="oxygen">blue</code></td>
            <td>bool</td>
            <td>Blue-colored button.</td>
          </tr>
          <tr>
            <td><code className="oxygen">purple</code></td>
            <td>bool</td>
            <td>Purple-colored button.</td>
          </tr>
          <tr>
            <td><code className="oxygen">black</code></td>
            <td>bool</td>
            <td>Black-colored button.</td>
          </tr>
          <tr>
            <td><code className="oxygen">orange</code></td>
            <td>bool</td>
            <td>Orange-colored button.</td>
          </tr>
          <tr>
            <td><code className="oxygen">darkOrange</code></td>
            <td>bool</td>
            <td>Dark orange-colored button.</td>
          </tr>
          <tr>
            <td><code className="oxygen">red</code></td>
            <td>bool</td>
            <td>Red-colored button.</td>
          </tr>
          <tr>
            <td><code className="oxygen">fluid</code></td>
            <td>bool</td>
            <td>Make the button expand to take the entire available width.</td>
          </tr>
          <tr>
            <td><code className="oxygen">inverted</code></td>
            <td>bool</td>
            <td>Invert the button's colors.</td>
          </tr>
          <tr>
            <td><code className="oxygen">attach</code></td>
            <td>string ('left', 'right', or 'mid')</td>
            <td>Allow other elements to be attached to this button
              from one or both sides..</td>
          </tr>
        </tbody>
      </table>
      <Row style={{marginBottom: "0.5em"}}>You know what buttons are
        for.</Row>
      
      <Row style={{marginBottom: "0.5em"}}>Standard button:</Row>
      <Row style={{marginBottom: "0.5em"}}><Button>Click
          here</Button></Row>
      
      <Row style={{marginBottom: "0.5em"}}>Buttons can also have no
        text in them. Here are some colored buttons with no text:</Row>
      <Row style={{marginBottom: "0.5em"}}>
        <Button teal />
        <Button green />
        <Button blue />
        <Button purple />
        <Button black />
        <Button orange />
        <Button darkOrange />
        <Button red />
      </Row>
      
      <Row style={{marginBottom: "0.5em"}}>
        A button can expand to the full width of its container.
      </Row>
      <Row style={{marginBottom: "0.5em"}}>
        <Button fluid >Click here</Button>
      </Row>

      <Row style={{marginBottom: "0.5em"}}>Buttons can have inverted colors.</Row>
      <Row style={{marginBottom: "0.5em"}}>
        <Button teal inverted>Click here</Button>
        <Button green inverted>Click here</Button>
        <Button blue inverted>Click here</Button>
        <Button purple inverted>Click here</Button>
        <Button black inverted>Click here</Button>
        <Button orange inverted>Click here</Button>
        <Button darkOrange inverted>Click here</Button>
        <Button red inverted>Click here</Button>
      </Row>

      <Row style={{marginBottom: "0.5em"}}>Buttons can be attached to each other.</Row>
      <Row style={{marginBottom: "0.5em"}}>
        <Button attach="left" green>Accept</Button>
        <Button attach="mid" red>Refuse</Button>
        <Button attach="right">Cancel</Button>
      </Row>
      <Row>
        <Button attach="left" blue inverted>Left</Button>
        <Button attach="mid" orange inverted>Center</Button>
        <Button attach="right" purple inverted>Right</Button>
      </Row>
    </Column>
  );
};

export default ButtonDemo;
