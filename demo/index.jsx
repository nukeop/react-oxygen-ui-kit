import React from "react";
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Lorem from 'react-lorem-component';

import './styles.scss';

import {
  Background,
  Button,
  Column,
  Container,
  Headline,
  Input,
  Loader,
  Menu,
  MenuItem,
  MenuSeparator,
  Panel,
  PanelBody,
  PanelFooter,
  PanelHeader,
  Paragraph,
  Rating,
  Row,
  Sidebar,
  SidebarEntry,
  SidebarLabel
} from '../src';

import ColumnDemo from './columnDemo';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
};

const sidebarContent = [
  {
    label: 'Layout',
    entries: [
      {title: 'Column', element: <ColumnDemo />},
      {title: 'Container'},
      {title: 'Row'}
    ]
  }, {
    label: 'Elements',
    entries: [
      {title: 'Background'},
      {title: 'Button'},
      {title: 'Headline'},
      {title: 'Input'},
      {title: 'Loader'},
      {title: 'Panel'},
      {title: 'Rating'}
    ]
  },
  {
    label: 'Views',
    entries: [
      {title: 'Menu'},
      {title: 'Sidebar'}
    ]
  }
];

const demo = () => {
  return(
    <div style={{borderTop: "10px solid #f1c40f"}}>
      <section>
        <Background
          image='https://i.imgur.com/KTKjdBU.jpg'
          color1='#3494E6'
          color2='#EC6EAD'
          />
        <Column grow={1} style={{padding: '9rem 0 7rem 0'}}>
          <Headline>
            React UI Kit
          </Headline>
          <Paragraph>
            A set of reusable UI components built with React and designed to be easy to integrate with any website.
          </Paragraph>
        </Column>
      </section>

      <section>
        <Row grow={1}>
          <Container>
            <Row grow={1}>
              <Sidebar
		sticky
		sections={sidebarContent}
	      />
            </Row>
          </Container>
        </Row>
      </section>
    </div>
  );
}

render(demo);

if (module.hot) {
  module.hot.accept( () => {
    render(demo);
  });
}
