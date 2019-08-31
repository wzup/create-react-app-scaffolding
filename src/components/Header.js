import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import {Link} from "react-router-dom";

class Header extends PureComponent {
  constructor(props, context) {
    super(props);
    this.state = {}
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[Header][getDerivedStateFromProps]', props, state);
    return {
      title: props.title
    }
  }

render() {
  return (
    <header className='header'>
      <h2>{this.props.title}</h2>
      <div className='links'>
        <Link className='link' to={'/discover'}>Discover</Link>
      </div>
    </header>
  );
}

static propTypes = {
  title: PropTypes.string
};

static defaultProps = {
  title: 'De Champs - Default'
}
}

export default Header;
