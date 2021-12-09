import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../pages/SignIn/SignIn";
import RecoverPassword from '../pages/RecoverPassword/RecoverPassword';

const AuthStack = createNativeStackNavigator();

const AuthRoute = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
            <AuthStack.Screen name='RecoverPassword' component={RecoverPassword} options={{ title: 'Esqueci minha Senha'}} />
        </AuthStack.Navigator>
    )
};

export default AuthRoute;
