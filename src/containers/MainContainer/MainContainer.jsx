import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ImagesList from '../../components/ImagesList';
import { showImage } from '../../actions/PhotoActions';
import './MainContainer.scss';

class MainContainer extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className='MainContainer'>
        <ImagesList
          images={this.props.images}
          clickAction={this.props.actions.showImage}
        />
        { this.props.children }
      </div>
    );
  }
}

MainContainer.defaultProps = {
};

MainContainer.propTypes = {
  children: PropTypes.node,
  images: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  images: state.images.get('list'),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    showImage,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
