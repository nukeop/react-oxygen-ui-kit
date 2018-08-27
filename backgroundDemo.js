import React from 'react';

import {
  Column, Row, Background
} from '../src';

const BackgroundDemo = () => {
  return(
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
            <td><code className="oxygen">image</code></td>
            <td>string</td>
            <td>Image to be used as the background</td>
          </tr>
          <tr>
            <td><code className="oxygen">color1</code></td>
            <td>string (valid CSS color)</td>
            <td>First color of the background gradient.</td>
          </tr>
          <tr>
            <td><code className="oxygen">color2</code></td>
            <td>string (valid CSS color)</td>
            <td>Second color of the background gradient.</td>
          </tr>
          <tr>
            <td><code className="oxygen">centered</code></td>
            <td>bool</td>
            <td>Whether to center the background image or not.</td>
          </tr>
          <tr>
            <td><code className="oxygen">noGradient</code></td>
            <td>bool</td>
            <td>Remove the gradient and use only the image.</td>
          </tr>
          <tr>
            <td><code className="oxygen">colored</code></td>
            <td>bool</td>
            <td>If false, the background image is converted to grayscale.</td>
          </tr>
          <tr>
            <td><code className="oxygen">className</code></td>
            <td>string</td>
            <td>Name of the CSS class to apply to the background.</td>
          </tr>
          <tr>
            <td><code className="oxygen">children</code></td>
            <td>node</td>
            <td>Content to be rendered over the background.</td>
          </tr>
        </tbody>
      </table>

      <Row>
        Background is an element that can be used as a header of a
        website or as a background for other components.
      </Row>
      <Row>
        Example:
      </Row>
      <Row style={{height: '8rem', margin: '1rem 0'}}>
        <Background />
      </Row>
      <Row>
        A background can specify a background image.
      </Row>
      <Row style={{height: '8rem', margin: '1rem 0'}}>
        <Background image="https://i.imgur.com/3PvJJw4.jpg"/>
      </Row>
      <Row>
        A background can change its colors.
      </Row>
      <Row style={{height: '8rem', margin: '1rem 0'}}>
        <Background color1="#F05F57" color2="#360940"/>
      </Row>
      <Row>
        A background can have its image centered.
      </Row>
      <Row style={{height: '8rem', margin: '1rem 0'}}>
        <Background centered image="https://i.imgur.com/3PvJJw4.jpg"/>
      </Row>
      <Row>
        A background can use a colored image.
      </Row>
      <Row style={{height: '8rem', margin: '1rem 0'}}>
        <Background centered colored image="https://i.imgur.com/3PvJJw4.jpg"/>
      </Row>
      <Row>
        A background can have its gradient disabled.
      </Row>
      <Row style={{height: '8rem', margin: '1rem 0'}}>
        <Background
          centered
          colored
          noGradient
          image="https://i.imgur.com/3PvJJw4.jpg"
        />
      </Row>
    </Column>
  );
};

export default BackgroundDemo;
