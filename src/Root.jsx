import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import AppContainer from './AppContainer';

export default function Root(props) {
  const { store } = props;
  console.log({ store });
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={AppContainer} />
      </Router>
    </Provider>
  );
}

/* eslint react/forbid-prop-types: 0 */
Root.propTypes = {
  store: React.PropTypes.object.isRequired

};
