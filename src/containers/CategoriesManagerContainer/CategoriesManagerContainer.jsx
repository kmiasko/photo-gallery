import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import './CategoriesManagerContainer.scss';
import CategoryList from '../../components/CategoryList';
import { checkDuplicate } from '../../utils/categories-utils';
import { addCategory } from '../../actions/CategoryActions';

class CategoriesManagerContainer extends Component {
  constructor() {
    super();
    this.state = {
      categoryInput: '',
      error: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleAddCategory = this.handleAddCategory.bind(this);
  }

  handleInput(event, value) {
    this.setState({
      categoryInput: value,
      error: '',
    });
  }

  handleAddCategory() {
    this.setState({
      error: '',
    });

    if (!this.state.categoryInput) {
      this.setState({
        error: 'Enter category name',
      });
      return null;
    }

    const { categoryInput } = this.state;
    if (checkDuplicate(categoryInput, this.props.categories)) {
      this.setState({
        error: 'Category exists',
      });
      return null;
    }

    this.props.addCategory(categoryInput);
    this.setState({
      categoryInput: '',
    });
    return true;
  }

  render() {
    return (
      <div className='CategoriesManagerContainer'>
        <h1>Manage categories</h1>
        <div className='CategoryInputRow'>
          <div className='CategoryActions'>
            <TextField
              hintText='Category'
              onChange={this.handleInput}
              value={this.state.categoryInput}
            />
            <FlatButton
              label='Add'
              onTouchTap={this.handleAddCategory}
              style={{ marginLeft: '10px', flex: '1 0 auto' }}
            />
          </div>
          <div className='CategoryError'><span>{this.state.error}</span></div>
        </div>
        <CategoryList />
      </div>
    );
  }
}

CategoriesManagerContainer.defaultProps = {
};

CategoriesManagerContainer.propTypes = {
  categories: PropTypes.object.isRequired,
  addCategory: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  categories: state.category.get('list'),
});

export default connect(mapStateToProps, {
  addCategory,
})(CategoriesManagerContainer);
