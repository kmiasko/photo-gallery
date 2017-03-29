import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './AppContainer.scss';
import ImagePreview from '../../components/ImagePreview';
import { hideImage, removeImage } from '../../actions/PhotoActions';

import NavBar from '../../components/common/NavBar';

class AppContainer extends Component {
  render() {
    const toggle = this.props.showing.get('toggle');
    const image = this.props.showing.get('image');
    return (
      <div className='AppContainer'>
        { !toggle && <NavBar /> }
        { !toggle && this.props.children }
        { toggle &&
          <ImagePreview
            image={image}
            hideImage={this.props.actions.hideImage}
            removeImage={this.props.actions.removeImage}
          /> }
      </div>
    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.node,
  showing: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  showing: state.images.get('showing'),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    hideImage,
    removeImage,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

