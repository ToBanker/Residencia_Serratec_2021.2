import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppDrawerRoute from './routes/app.drawer.routes';

const App = () => {
  return ( 
    <NavigationContainer>
      <AppDrawerRoute />
    </NavigationContainer>
  );
};

export default App;
