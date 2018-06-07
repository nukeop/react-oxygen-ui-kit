import React from 'react';

import {
  Column,
  Row,
  Input,
  Button,
  Background
} from '../src';

const InputDemo = () => {
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
            <td><code className="oxygen">border</code></td>
            <td>bool</td>
            <td>Disable or enable input's border.</td>
          </tr>
          <tr>
            <td><code className="oxygen">attach</code></td>
            <td>string ('left', 'right', or 'mid')</td>
            <td>Allow other elements to be attached to this input field from one or both sides.</td>
          </tr>
          <tr>
            <td><code className="oxygen">className</code></td>
            <td>string</td>
            <td>Name of the CSS class to apply to the background.</td>
          </tr>
        </tbody>
      </table>

      <Row style={{ marginBottom: '0.5em' }}>
        Standard input field.
      </Row>

      <Row style={{ marginBottom: '0.5em' }}>
        <Input border />
      </Row>

      <Row style={{ marginBottom: '0.5em' }}>
        Borderless input field.
      </Row>

      <Row style={{ height: '6rem', marginBottom: '0.5em' }}>
        <Background style={{display: 'flex', alignItems: 'center', padding: '1rem'}}>
          <Input style={{opacity: .999}}/>
        </Background>
      </Row>

      <Row style={{ marginBottom: '0.5em' }}>
        An input field can have other elements attached to it.
      </Row>

      <Row style={{ marginBottom: '0.5em' }}>
        <Input border attach='left' /> <Button green attach='right'>Sell</Button>
      </Row>

      <Row style={{ marginBottom: '0.5em' }}>
        <Button darkOrange attach='left'>Launch</Button><Input border attach='right' /> 
      </Row>

       <Row style={{ marginBottom: '0.5em' }}>
         <Button red attach='left'>Red pill</Button><Input border
                                                         attach='mid'/><Button blue attach='right'>Blue pill</Button>
      </Row>

    </Column>
  );
};

export default InputDemo;
