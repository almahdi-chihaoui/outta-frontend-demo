import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import store, { history } from './store';
import config from '../config';
import App from './containers/app';

const target = document.querySelector('#root');

const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: config.PRIMARY_CONTRAST_TEXT_COLOR,
      dark: config.PRIMARY_DARK_COLOR,
      light: config.PRIMARY_LIGHT_COLOR,
      main: config.PRIMARY_MAIN_COLOR,
    },
    secondary: {
      contrastText: config.SECONDARY_CONTRAST_TEXT_COLOR,
      dark: config.SECONDARY_DARK_COLOR,
      light: config.SECONDARY_LIGHT_COLOR,
      main: config.SECONDARY_MAIN_COLOR,
    },
  },
  // typography: {
  //   useNextVariants: true,
  // },
});

render(
  <Router>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  </Router>,
  target,
);

module.hot?.accept();
