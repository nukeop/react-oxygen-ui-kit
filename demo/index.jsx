import React from "react";
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './styles.scss';

import {
  Background,
  Button,
  Headline,
  Input,
  Loader,
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
        <Panel fluid>
          <PanelBody>
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
          </PanelBody>
        </Panel>
      </section>

      <section>
        <Panel fluid>
          <PanelHeader>
            Panels - examples
          </PanelHeader>
          <PanelBody row>

            <Panel>
              <PanelHeader>Panel header</PanelHeader>
              <PanelBody style={{paddingBottom: '8rem'}}>Standard panel body which can contain any text</PanelBody>
              <PanelFooter>Panel footer</PanelFooter>
            </Panel>

            <Panel>
              <PanelHeader>Panel with a background</PanelHeader>
              <PanelBody
              >
                <Background
                  image='https://i.imgur.com/hSimrrl.jpg'
                  centered
                  colored
                  noGradient
                />
                <Paragraph>
                  And some text for good measure
                </Paragraph>
              </PanelBody>
              <PanelFooter>Another footer</PanelFooter>
            </Panel>

            <Panel
              style={{width: '19.6rem', height: 'auto'}}
            >
              <Background
                image='https://i.imgur.com/PxJNP62.jpg'
                centered
                colored
                noGradient
              />
              <Paragraph
                style={{background: '#2c3e5099', zIndex: 10, margin: '1rem', padding: '1rem', borderRadius: '0.25rem'}}
              >
                This panel has no header, footer, or body, but it has a background and some text
              </Paragraph>
            </Panel>

          </PanelBody>
        </Panel>

      </section>

      <section>
        <Panel fluid>
          <PanelHeader>
            Buttons - examples
          </PanelHeader>
          <PanelBody row>
            <Button>Click here</Button>
            <Button teal>Click here</Button>
            <Button green>Click here</Button>
            <Button blue>Click here</Button>
            <Button purple>Click here</Button>
            <Button black>Click here</Button>
            <Button orange>Click here</Button>
            <Button darkOrange>Click here</Button>
            <Button red>Click here</Button>
          </PanelBody>
        </Panel>
      </section>

      <section>
        <Panel fluid>
          <PanelHeader>
            Buttons and inputs - advanced examples
          </PanelHeader>
          <PanelBody row>
            <Button attach='left' green>Yes</Button>
            <Button attach='mid' blue>Maybe</Button>
            <Button attach='right' red>No</Button>
            <Input border />
            <Button orange attach='left'>Submit</Button>
            <Input border attach='right'/>
          </PanelBody>
        </Panel>

      </section>

      <section>
        <Panel fluid>
          <PanelHeader>
            Loaders
          </PanelHeader>
          <PanelBody row>
            <Loader type="loader1"/>
            <Loader type="loader2"/>
            <Loader type="loader3"/>
            <Loader type="loader4"/>
          </PanelBody>
        </Panel>
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
