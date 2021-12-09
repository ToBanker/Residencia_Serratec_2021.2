import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppDrawerRoute from './routes/app.drawer.routes';
import AuthRoute from './routes/auth.routes';

const App = () => {
  return ( 
    <NavigationContainer>
      <AppDrawerRoute />
      {/* <AuthRoute /> */}
    </NavigationContainer>
  );
};

export default App;
