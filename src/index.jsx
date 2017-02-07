import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './store';
import AppContainer from './containers/AppContainer';
import CategoriesManagerContainer from './containers/CategoriesManagerContainer';
import MainContainer from './containers/MainContainer';
import ImagesManagerContainer from './containers/ImagesManagerContainer';

injectTapEventPlugin();

const store = configureStore();

const App = props => (
  <MuiThemeProvider>
    <AppContainer>
      { props.children }
    </AppContainer>
  </MuiThemeProvider>
);

App.propTypes = {
  children: PropTypes.node,
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={MainContainer} />
        <Route path='categories' component={CategoriesManagerContainer} />
        <Route path='images' component={ImagesManagerContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

