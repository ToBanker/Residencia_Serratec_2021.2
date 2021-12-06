import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppRoute from './routes/app.routes';

const App = () => {
  return ( 
    <NavigationContainer>
      <AppRoute />
    </NavigationContainer>
  );
};

export default App;
