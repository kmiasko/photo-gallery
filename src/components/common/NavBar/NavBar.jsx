import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { grey50 } from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';
import { makePhoto } from '../../../actions/PhotoActions';

import './NavBar.scss';

const Menu = (props) => {
  const mp = () => {
    props.makePhoto()
      .then(() => {})
      .catch(err => console.error(err));
  };
  return (
    <IconMenu
      iconButtonElement={
        <IconButton>
          <MoreVertIcon color={grey50} />
        </IconButton>
      }
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <MenuItem onTouchTap={() => hashHistory.push('images')} primaryText='Manage photos' />
      <MenuItem onTouchTap={() => hashHistory.push('categories')} primaryText='Manage categories' />
      <MenuItem primaryText='Take photo' onTouchTap={mp} />
    </IconMenu>
  );
};

Menu.muiName = 'IconMenu';

Menu.propTypes = {
};

class NavBar extends Component {
  render() {
    const { makePhoto } = this.props.actions;
    return (
      <div className='NavBar'>
        <AppBar
          onTitleTouchTap={() => hashHistory.push('/')}
          title='Photo Gallery'
          titleStyle={{ flexGrow: 0, flexBasis: 'auto', cursor: 'pointer' }}
          iconElementRight={<Menu makePhoto={makePhoto} />}
          showMenuIconButton={false}
        />
      </div>
    );
  }
}

NavBar.defaultProps = {
};

NavBar.propTypes = {
  actions: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    makePhoto,
  }, dispatch),
});

export default connect(null, mapDispatchToProps)(NavBar);
