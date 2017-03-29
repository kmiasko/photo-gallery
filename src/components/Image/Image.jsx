import React, { PropTypes } from 'react';
import { GridTile } from 'material-ui/GridList';
import './Image.scss';

const Image = props => {
  let style = {};
  if (props.selected) {
    style = {
      border: '2px solid red'
    };
  }
  console.log(style, props);
  return (
    <GridTile
      onClick={props.clickAction.bind(null, props.image)}
      style={style}
    >
      <img src={props.image.url} alt='' />
    </GridTile>
  );
};

Image.muiName = 'GridTile';

Image.defaultProps = {
  image: {
    id: '',
    url: '',
    category: '',
  },
  selected: false,
};

Image.propTypes = {
  image: PropTypes.object.isRequired,
  clickAction: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};

export default Image;
