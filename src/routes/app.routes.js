import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home/Home';
import Listagem from "../pages/Listagem/Listagem";

const Stack = createNativeStackNavigator();

const AppRoute = () => {
    return(
        <Stack.Navigator 
            initialRouteName='Home' 
            screenOptions={{
                title: 'Minha Lista',
                    headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: '500',
                    },
                headerTitleAlign: 'center'
            }}
        >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Listagem' component={Listagem} />
        </Stack.Navigator>
    )
};

export default AppRoute;
