import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import muiTheme from './utils/mui-theme';
import RepoApp from './components/RepoApp/RepoApp.component';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <RepoApp />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
