/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';
import FontFaceObserver from 'fontfaceobserver';

import { MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';

// Load the favicon
/* eslint-disable import/no-webpack-loader-syntax */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
/* eslint-enable import/no-webpack-loader-syntax */

// Import CSS bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';

// Import CSS reset and Global Styles
import 'styles/global-styles.scss';

import 'sanitize.css/sanitize.css';

// Import root app
import App from './containers/App';

import { store } from './store';


// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
}, () => {
  document.body.classList.remove('fontLoaded');
});

// Create redux store with history
// const initialState = {};
// const history = createHistory();
// const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#275682',
      main: '#275682',
      dark: '#275682',
      contrastText: '#fff',
    },
    secondary: {
      light: '#00A6FF',
      main: '#00A6FF',
      dark: '#00A6FF',
      contrastText: '#fff',
    },
  },
  typography: {
    fontSize: 14,
    useNextVariants: true,
  }
});

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <CssBaseline>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </CssBaseline>
    </Provider>,
    // <Provider store={store}>
    //   {/* <LanguageProvider messages={messages}> */}
    //   <ConnectedRouter history={history}>
    //     <App />
    //   </ConnectedRouter>
    //   {/* </LanguageProvider> */}
    // </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
