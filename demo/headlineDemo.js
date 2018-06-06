import React from 'react';
import Lorem from 'react-lorem-component';

import {
  Column,
  Row,
  Container,
  Headline,
  Background,
  Paragraph
} from '../src';

const HeadlineDemo = () => {
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
            <td><code className="oxygen">inverted</code></td>
            <td>bool</td>
            <td>Inverts the headline making it dark.</td>
          </tr>
          <tr>
            <td><code className="oxygen">style</code></td>
            <td>object</td>
            <td>Works the same way as a regular style property in React.</td>
          </tr>
          <tr>
            <td><code className="oxygen">className</code></td>
            <td>string</td>
            <td>Name of the CSS class to apply to the headline.</td>
          </tr>
          <tr>
            <td><code className="oxygen">children</code></td>
            <td>node</td>
            <td>Primary content.</td>
          </tr>
        </tbody>
      </table>

      <Row style={{ marginBottom: '0.5em' }}>
        A headline is a piece of text displayed prominently in the
        middle of the screen, typically over a Background component.
      </Row>

      <Row style={{ marginBottom: '0.5em' }}>
        Standard headline.
      </Row>

      <Row style={{ marginBottom: '0.5em', height: '10rem' }}>
        <Background>
          <Headline>
            Headline
          </Headline>
        </Background>
      </Row>

      <Row style={{ marginBottom: '0.5em' }}>
        A headline can be inverted so it's visible on a lighter background.
      </Row>

      <Row style={{ marginBottom: '0.5em', height: '10rem' }}>
        <Background color1='#d9a7c7' color2='#fffcdc'>
          <Headline inverted>
            Inverted headline
          </Headline>
        </Background>
      </Row>

      <Row style={{ marginBottom: '0.5em' }}>
        A headline can have a paragraph underneath to describe it.
      </Row>

      <Row style={{ marginBottom: '0.5em', height: '15rem' }}>
        <Background>
          <Headline>
            Headline
          </Headline>
          <Container narrow justified>
            <Paragraph>
              <Lorem count={1} />
            </Paragraph>
          </Container>
        </Background>
      </Row>

    </Column>
  );
};

export default HeadlineDemo;
