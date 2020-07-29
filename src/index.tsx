import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import store, { history } from './store';
import App from './containers/app';

const target = document.querySelector('#root');

const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: '#fff',
      dark: '#2c387e',
      light: '#6573c3',
      main: '#3F51B5',
    },
    secondary: {
      contrastText: '#000',
      dark: '#a31545',
      light: '#ed4b82',
      main: '#e91e63',
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
