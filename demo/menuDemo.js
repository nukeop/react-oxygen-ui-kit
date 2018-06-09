import React from 'react';

import {
  Column,
  Row,
  Menu,
  MenuItem,
  MenuSeparator
} from '../src';

const MenuDemo = () => {
  return (
    <Column>
      <h3>Menu</h3>
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
            <td><code className="oxygen">small</code></td>
            <td>bool</td>
            <td>Use small menu variant.</td>
          </tr>
          <tr>
            <td><code className="oxygen">big</code></td>
            <td>bool</td>
            <td>Use big menu variant.</td>
          </tr>
          <tr>
            <td><code className="oxygen">fluid</code></td>
            <td>bool</td>
            <td>Automatically fill the parent component.</td>
          </tr>
          <tr>
            <td><code className="oxygen">children</code></td>
            <td>node</td>
            <td>Primary content.</td>
          </tr>
        </tbody>
      </table>

      <h3>MenuItem</h3>
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
            <td><code className="oxygen">button</code></td>
            <td>bool</td>
            <td>Make the item clickable.</td>
          </tr>
          <tr>
            <td><code className="oxygen">onClick</code></td>
            <td>function</td>
            <td>Function to be executed when the item is clicked.</td>
          </tr>
          <tr>
            <td><code className="oxygen">className</code></td>
            <td>string</td>
            <td>Name of the CSS class to apply to the panel.</td>
          </tr>
          <tr>
            <td><code className="oxygen">children</code></td>
            <td>node</td>
            <td>Primary content.</td>
          </tr>
        </tbody>
      </table>

      <h3>MenuSeparator</h3>
      <p>No customizable properties.</p>
      <hr />
      <Row style={{marginBottom: '0.5em'}}>
        Menu lets you create a horizontal bar with buttons or other
        entries for navigation.
      </Row>

      <Row>Standard menu.</Row>
      <Row>
        <Menu>
          <MenuItem button>Home</MenuItem>
          <MenuItem button>Articles</MenuItem>
          <MenuItem button>Gallery</MenuItem>
        </Menu>
      </Row>

      <Row>Menu with separators.</Row>
      <Row>
        <Menu>
          <MenuItem button>Home</MenuItem>
          <MenuSeparator />
          <MenuItem button>Articles</MenuItem>
          <MenuSeparator />
          <MenuItem button>Gallery</MenuItem>
        </Menu>
      </Row>

      <Row>Big menu.</Row>
      <Row>
        <Menu big>
          <MenuItem button>Home</MenuItem>
          <MenuSeparator />
          <MenuItem button>Articles</MenuItem>
          <MenuSeparator />
          <MenuItem button>Gallery</MenuItem>
        </Menu>
      </Row>

      <Row>Small menu.</Row>
      <Row>
        <Menu small>
          <MenuItem button>Home</MenuItem>
          <MenuSeparator />
          <MenuItem button>Articles</MenuItem>
          <MenuSeparator />
          <MenuItem button>Gallery</MenuItem>
        </Menu>
      </Row>

      <Row>Menu items can use icons instead of text.</Row>
      <Row>
        <Menu>
          <MenuItem button onClick={() => alert('You clicked Emacs')}><img alt="Emacs" src="http://icons.iconarchive.com/icons/bokehlicia/captiva/128/emacs-icon.png"/></MenuItem>
          <MenuSeparator />
          <MenuItem button onClick={() => alert('You clicked Vim')}><img alt="Vim" src="http://icons.iconarchive.com/icons/bokehlicia/captiva/128/vim-icon.png"/></MenuItem>
          <MenuSeparator />
          <MenuItem button onClick={() => alert('You clicked Atom')}><img alt="Atom" src="http://icons.iconarchive.com/icons/bokehlicia/captiva/128/atom-icon.png"/></MenuItem>
          <MenuSeparator />
          <MenuItem button onClick={() => alert('You clicked Sublime Text')}><img alt="Sublime Text" src="http://icons.iconarchive.com/icons/bokehlicia/pacifica/128/sublime-text-icon.png"/></MenuItem>
        </Menu>
      </Row>

      <Row>Menu can take the entire width of its parent component.</Row>
      <Row>
        <Menu fluid>
          <MenuItem>This is a fluid menu</MenuItem>
        </Menu>
      </Row>
      
    </Column>
  );
};

export default MenuDemo;
