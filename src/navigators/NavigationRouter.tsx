import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';
import Home from '@/src/screens/Home';
import Login from '@/src/screens/Login';
import Schools from '@/src/screens/Schools';

import {backButton} from './NavItems';

const NavigationRouter = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="home" title="Home" component={Home} initial />
        <Scene
          key="login"
          title="Login"
          component={Login}
          renderLeftButton={backButton}
        />
        <Scene
          key="schools"
          title="Schools"
          component={Schools}
          renderLeftButton={backButton}
        />
      </Stack>
    </Router>
  );
};

export default NavigationRouter;
