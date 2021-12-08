import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';

import theme from './theme';
import { ScrollReset, BaseRoutesProvider } from './components';
import './assets/scss/index.scss';
import { UserProvider } from './context/userContext';
import { NotificationProvider } from './context/notificationContext';
import { getResources } from './api/resources';

const App = () => {
  const [resources, setResources] = React.useState([]);
  console.log(resources);

  const fetchResources = async () => {
    const res = await getResources();
    setResources(res);
  };

  React.useEffect(() => {
    fetchResources();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider dense={false}>
        <NotificationProvider>
          <UserProvider>
            <Router>
              <ScrollReset />
              <BaseRoutesProvider />
            </Router>
          </UserProvider>
        </NotificationProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
