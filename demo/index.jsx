import React from "react";
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './styles.scss';

import {
  Background,
  Button,
  Headline,
  Input,
  Panel,
  PanelBody,
  PanelFooter,
  PanelHeader,
  Paragraph
} from '../src';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
};

const demo = () => {
  return (
    <div>

      <section>
        <Background
          image='https://i.imgur.com/KTKjdBU.jpg'
        />

        <div style={{flexFlow: 'column', width: '100%', padding: '10rem 0'}}>
          <Headline>
            React UI Kit
          </Headline>
          <Paragraph>
            A set of reusable UI components built with React and designed to be easy to integrate with any website.
          </Paragraph>
        </div>

      </section>

      <section>
        <Panel style={{padding: '10rem 0'}} fluid>
          <Background
            image='https://i.imgur.com/pq5NYk0.jpg'
            color1='#0575e6'
            color2='#00f260'
            centered
          />
          <Headline>
            Panel with a background
          </Headline>
          <Paragraph>And a couple of paragraphs of text</Paragraph>
          <Paragraph>All UI elements can be combined</Paragraph>
        </Panel>
      </section>

      <section style={{padding: '1rem'}}>
        <Button>Click here</Button>
        <Button teal>Click here</Button>
        <Button green>Click here</Button>
        <Button blue>Click here</Button>
        <Button purple>Click here</Button>
        <Button black>Click here</Button>
        <Button orange>Click here</Button>
        <Button darkOrange>Click here</Button>
        <Button red>Click here</Button>

      </section>

      <section style={{padding: '1rem'}}>
        <Button attach='left' green>Yes</Button>
        <Button attach='mid' blue>Maybe</Button>
        <Button attach='right' red>No</Button>
        <Input />
        <Button orange attach='left'>Submit</Button>
        <Input />
      </section>

    </div>
  );
};

render(demo);

if (module.hot) {
  module.hot.accept( () => {
    render(demo);
  });
}
