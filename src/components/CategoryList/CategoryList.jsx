import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { red400 } from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import { removeCategory } from '../../actions/CategoryActions';

import './CategoryList.scss';

const DeleteButton = props => (
  <IconButton onClick={props.onClick}>
    <DeleteIcon color={red400} />
  </IconButton>
);

DeleteButton.muiName = IconButton;

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const CategoryList = props => (
  <div className='CategoryList'>
    <List>
      { props.categories.map(category =>
        <ListItem
          key={category.id}
          primaryText={category.category}
          innerDivStyle={{
            display: 'flex',
            flexFlow: 'row-reverse nowrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '2px 16px 0px 32px',
          }}
        >
          <DeleteButton onClick={props.removeCategory.bind(null, category.id)} />
        </ListItem>)}
    </List>
  </div>
);

CategoryList.propTypes = {
  categories: PropTypes.object.isRequired,
  removeCategory: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  categories: state.category.get('list'),
});

export default connect(mapStateToProps, {
  removeCategory,
})(CategoryList);
