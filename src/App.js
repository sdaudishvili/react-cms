import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';

import theme from './theme';
import { ScrollReset, BaseRoutesProvider } from './components';
import './assets/scss/index.scss';
import { NotificationProvider } from './context/notificationContext';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider dense={false}>
        <NotificationProvider>
          <Router>
            <ScrollReset />
            <BaseRoutesProvider />
          </Router>
        </NotificationProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
