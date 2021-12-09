import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from "./styles";

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleGoRecoverPassword() {
        navigation.navigate('RecoverPassword');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Minha Lista</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder='E-mail'
                style={styles.inputContainer}
            />
            <TextInput
                value={senha}
                onChangeText={setSenha}
                placeholder='Senha'
                style={styles.inputContainer}
            />
            <TouchableOpacity style={styles.esqueciContaButton} onPress={handleGoRecoverPassword}>
                <Text style={styles.esqueciContaButtonText}>Esqueci minha senha</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default SignIn;