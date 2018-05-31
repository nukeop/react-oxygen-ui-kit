import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import SidebarEntry from '../SidebarEntry';
import SidebarLabel from '../SidebarLabel';
import SidebarContent from '../SidebarContent';
import styles from './styles.scss';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element: null
    };
  }

  onEntryClicked(entry) {
    this.setState({
      element: entry.element || null
    });
  }
  
  render(){
    let {
      sticky,
      sections
    } = this.props;
    
    return (
      <React.Fragment>
	<div className={classnames(
               "oxygen sidebar",
               {'sticky': sticky}
               )
             }
	>
	  {
	    sections &&
	      sections.map((section, i) => {
		return (
		  <React.Fragment key={i}>
		    <SidebarLabel>
		      {section.label}
		    </SidebarLabel>
		    {
		      section.entries.map(entry => {
			return (
			  <SidebarEntry onClick={() => this.onEntryClicked(entry)}>
			    {entry.title}
			  </SidebarEntry>
			);
		      })
		    }
		  </React.Fragment>
		);
	      })
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
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      entries: PropTypes.arrayOf(
	PropTypes.shape({
	  title: PropTypes.string,
	  element: PropTypes.node
	})
      )
    })
  )
};

export default Sidebar;
