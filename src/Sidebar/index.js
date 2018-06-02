import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';

import SidebarEntry from '../SidebarEntry';
import SidebarLabel from '../SidebarLabel';
import SidebarContent from '../SidebarContent';
import './styles.scss';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element: _.head(_.head(props.sections).entries).element
    };
  }

  onEntryClicked(entry) {
    this.setState({
      element: entry.element || null
    });
  }

  render() {
    const {
      sticky,
      sections
    } = this.props;

    return (
      <React.Fragment>
        <div className={classnames(
               'oxygen sidebar',
               { sticky }
               )
             }
        >
          {
            sections &&
              sections.map(section => (
                <React.Fragment key={section.label}>
                  <SidebarLabel>
                    {section.label}
                  </SidebarLabel>
                  {
                    section.entries.map(entry => (
                      <SidebarEntry key={entry.title} onClick={() => this.onEntryClicked(entry)}>
                        {entry.title}
                      </SidebarEntry>
                    ))
                  }
                </React.Fragment>
              ))
          }
        </div>
        <SidebarContent>
          {this.state.element}
        </SidebarContent>
      </React.Fragment>
    );
  }
}

Sidebar.propTypes = {
  sticky: PropTypes.bool,
  sections: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    entries: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      element: PropTypes.node
    }))
  }))
};

Sidebar.defaultProps = {
  sticky: false,
  sections: []
};

export default Sidebar;
