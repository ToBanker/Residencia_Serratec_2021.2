import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer';
import AppRoute from "./app.routes";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Listagem from "../pages/Listagem/Listagem";

const Drawer = createDrawerNavigator();
 
const AppDrawerRoute = () => {
    return(
        <Drawer.Navigator screenOptions={{ headerShown: false, drawerPosition: 'right' }}>
            <Drawer.Screen 
                name='Home' 
                component={AppRoute} 
                options={{ 
                    title: 'Minha Lista',
                    drawerIcon: () => <FontAwesome name='th-list' size={20} />,
                    drawerActiveTintColor: 'green',
                }} 
            />
            <Drawer.Screen name='Listagem' component={Listagem} />
        </Drawer.Navigator>
    );
};

export default AppDrawerRoute;
