import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Home = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.titulo}>Texto 1</Text>
                    <Text style={styles.titulo}>Texto 1.2</Text>
                </View>
                <View>
                    <Text style={styles.titulo}>Texto 2</Text>
                </View>
                <Text style={styles.titulo}>Texto 3</Text>
            </View>
            <View style={{ flex: 0.6}}>
                <Text style={styles.titulo}>Texto 3</Text>
            </View>
            <View style={{ flex: 0.4, backgroundColor: 'green'}}>
                <Text style={styles.titulo}>Texto 3</Text>
            </View>
        </>
    );
};

export default Home;