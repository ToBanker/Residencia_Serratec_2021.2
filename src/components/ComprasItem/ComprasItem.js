import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const ComprasItem = ({id, nome, itensSelecionados, itensTotal}) => {
    return (
        <View key={id} style={styles.container}>
            <Text>{nome}</Text>
            <Text>({itensSelecionados}/{itensTotal})</Text>
            <TouchableOpacity>
                <Text>Ir</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ComprasItem;