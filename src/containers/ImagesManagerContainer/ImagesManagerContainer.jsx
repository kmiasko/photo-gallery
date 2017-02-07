import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FlatButton from 'material-ui/FlatButton';
import ImagesList from '../../components/ImagesList';
import { selectImage, clearSelectedImages, removeMultipleImages } from '../../actions/PhotoActions';
import './ImagesManagerContainer.scss';

class ImagesManagerContainer extends Component {

  componentWillMount() {
    this.props.actions.clearSelectedImages();
  }

  componentWillUnmount() {
    this.props.actions.clearSelectedImages();
  }

  render() {
    return (
      <div className='ImagesManagerContainer'>
        <h1>Manage Photos</h1>
        <ImagesList
          images={this.props.images}
          clickAction={this.props.actions.selectImage}
          selected={this.props.selected}
        />
        { (this.props.selected.size > 0) && <div className='ImagesManagerContainer__Actions'>
          <FlatButton
            label="Delete"
            secondary
            onClick={() => this.props.actions.removeMultipleImages(this.props.selected)}
          />
          <FlatButton
            label="Cancel"
            onClick={this.props.actions.clearSelectedImages}
            labelStyle={{ color: '#fafafa' }}
          />
        </div> }
      </div>
    );
  }
}

ImagesManagerContainer.defaultProps = {
  images: {},
};

ImagesManagerContainer.propTypes = {
  images: PropTypes.object,
  actions: PropTypes.object,
  selected: PropTypes.object,
};

const mapStateToProps = state => ({
  images: state.images.get('list'),
  selected: state.images.get('selected'),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    selectImage,
    clearSelectedImages,
    removeMultipleImages,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImagesManagerContainer);
