import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import {useNavigation} from '@react-navigation/core';

const ComprasItem = ({id, nome, itensSelecionados, itensTotal}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity key={id} style={styles.container} onPress={() => navigation.navigate('Listagem')}>
            <Text>{nome}</Text>
            <Text>({itensSelecionados}/{itensTotal})</Text>
            {/* <TouchableOpacity>
                <Text>Ir</Text>
            </TouchableOpacity> */}
        </TouchableOpacity>
    );
};

export default ComprasItem;