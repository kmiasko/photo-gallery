import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import './ImagePreview.scss';

const ImagePreview = props => {
  const remove = () => {
    props.removeImage(props.image.id);
    props.hideImage();
  };
  return (
    <div className='ImagePreview'>
      <div className='ImagePreview--image'>
        <img src={props.image.url} alt='' />
      </div>
      <div className='ImagePreview--button'>
        <FlatButton label='Delete' secondary onClick={remove} />
        <FlatButton label='Close' secondary onClick={props.hideImage} />
      </div>
    </div>
  );
};

ImagePreview.defaultProps = {
};

ImagePreview.propTypes = {
  image: PropTypes.object.isRequired,
  hideImage: PropTypes.func.isRequired,
  removeImage: PropTypes.func.isRequired,
};

export default ImagePreview;
