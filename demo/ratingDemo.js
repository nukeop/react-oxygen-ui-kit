import React from 'react';

import {
  Column, Row, Rating
} from '../src';

const RatingDemo = () => {
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
            <td><code className="oxygen">stars</code></td>
            <td>number (required)</td>
            <td>How many stars to display. Maximum five.</td>
          </tr>
          <tr>
            <td><code className="oxygen">score</code></td>
            <td>string</td>
            <td>What score to display. Can be in any format</td>
          </tr>
          <tr>
            <td><code className="oxygen">showScore</code></td>
            <td>bool</td>
            <td>Shows the score string in addition to stars.</td>
          </tr>
          <tr>
            <td><code className="oxygen">green</code></td>
            <td>bool</td>
            <td>Uses a green background for the score.</td>
          </tr>
          <tr>
            <td><code className="oxygen">yellow</code></td>
            <td>bool</td>
            <td>Uses a yellow background for the score.</td>
          </tr>
          <tr>
            <td><code className="oxygen">orange</code></td>
            <td>bool</td>
            <td>Uses a orange background for the score.</td>
          </tr>
          <tr>
            <td><code className="oxygen">red</code></td>
            <td>bool</td>
            <td>Uses a red background for the score.</td>
          </tr>
        </tbody>
      </table>

      <Row style={{marginBottom: '0.5em'}}>The Rating component lets you display a star rating along
        with an optional score string.</Row>
      <Row style={{marginBottom: '0.5em'}}>Standard rating:</Row>
      <Row style={{marginBottom: '0.5em'}}><Rating stars={3}/></Row>

      <Row style={{marginBottom: '0.5em'}}>Ratings with scores:</Row>

      <Column style={{marginBottom: '0.5em'}}>
        <Rating stars={5} score={98} showScore/>
        <Rating stars={3} score={65} showScore yellow/>
        <Rating stars={2} score={37} showScore orange/>
        <Rating stars={1} score={19} showScore red/>
      </Column>
    </Column>
  );
};

export default RatingDemo;
