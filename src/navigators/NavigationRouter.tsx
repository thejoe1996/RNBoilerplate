import React, { FC } from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Home from '@/src/screens/Home';
import Login from '@/src/screens/Login';

const NavigationRouter = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="home" title="Home" component={Home} initial />
        <Scene key="login" title="Login" component={Login} back/>
      </Stack>
    </Router>
  )
}

export default NavigationRouter;