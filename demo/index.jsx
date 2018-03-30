import React from "react";
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './styles.scss';

import {
  Background,
  Panel,
  PanelHeader
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
      </section>

      <section>
        <Panel style={{width: '15rem', height: '20rem'}}>
          <PanelHeader>
            Panel Title
          </PanelHeader>
        </Panel>
      </section>

      <section>
        <Background
          image='https://i.imgur.com/QLkTuOa.jpg'
          color1='#42378f'
          color2='#f53844'
        />
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
