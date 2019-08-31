import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import '../App.scss';

const Default = props => {
  return (
    <div className='App-grid'>
      <div className='item item-1'>
        <div>Left</div>
      </div>
      <div className='item item-2'>
        <div>Right</div>
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  return {

  }
};

export default connect(mapStateToProps)(Default);
