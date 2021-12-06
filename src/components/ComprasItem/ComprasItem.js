import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const ComprasItem = ({id, nome, itensSelecionados, itensTotal, onPress}) => {
    return (
        <TouchableOpacity key={id} style={styles.container} onPress={onPress}>
            <Text>{nome}</Text>
            <Text>({itensSelecionados}/{itensTotal})</Text>
            {/* <TouchableOpacity>
                <Text>Ir</Text>
            </TouchableOpacity> */}
        </TouchableOpacity>
    );
};

export default ComprasItem;