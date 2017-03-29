import React, { Component, PropTypes } from 'react';
import './DummyComponent.scss';

class DummyComponent extends Component {

  render() {
    return (
      <div>
        <div className="counter">
          {this.props.dummy.counter}
        </div>
      </div>);
  }
}

DummyComponent.propTypes = {
  dummy: PropTypes.object,
};

export default DummyComponent;
