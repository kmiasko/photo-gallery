import React, { PropTypes } from 'react';
import { GridList } from 'material-ui/GridList';
import { List } from 'immutable';
import Image from '../Image';
import './ImagesList.scss';

const EmptyList = () => (
  <div className='ImagesList--empty'>
    <p>Your image list is empty</p>
  </div>
);

const ImagesList = props => {
  return (
    <div className='ImagesList'>
      { (props.images.size === 0) && <EmptyList /> }
      { (props.images.size > 0) && <GridList
        cellHeight={100}
        style={{
          overflowY: 'auto',
        }}
      >
        { props.images.map(image =>
          <Image
            key={image.id}
            image={image}
            clickAction={props.clickAction}
            selected={(props.selected.findIndex(id => id === image.id) >= 0)}
          />) }
      </GridList> }
    </div>
  );
};

ImagesList.muiName = 'GridList';

ImagesList.defaultProps = {
  images: {},
  selected: List(),
};

ImagesList.propTypes = {
  images: PropTypes.object,
  selected: PropTypes.object,
  // clickAction: PropTypes.func,
};

export default ImagesList;
