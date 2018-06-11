# react-oxygen-ui-kit ![Travis](https://img.shields.io/travis/nukeop/react-oxygen-ui-kit.svg?style=for-the-badge)

[![Greenkeeper badge](https://badges.greenkeeper.io/nukeop/react-oxygen-ui-kit.svg)](https://greenkeeper.io/)

Easy to use UI Kit for React

## Live demo
https://nukeop.github.io/react-oxygen-ui-kit/

## npm
https://www.npmjs.com/package/react-oxygen-ui-kit

## Installation
```shell
$ npm install react-oxygen-ui-kit
```

## Usage
```javascript

import Oxygen from 'react-oxygen-ui-kit';

const {
  Column,
  Container,
  Row
} = Oxygen.default;

const comp = props => {
  return (
    <section>
      <Row>
        <Container>
          <Column>
            First column of text
          </Column>
          <Column>
            Second column of text
          </Column>
        </Container>
      </Row>
    </section>
  );
};

```

Check the demo for more advanced examples.

## Contributing
Feel free to add new components or modify existing ones.

You can also edit the demo page if you feel that something can be presented better. Pull requests are always welcome.

## About
### License
Copyright © 2018, [nukeop](https://github.com/nukeop).
Released under the [MIT License](LICENSE).
