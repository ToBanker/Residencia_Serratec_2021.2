import React, { useLayoutEffect } from 'react';
import { FlatList, Image, TouchableOpacity } from 'react-native';
import ComprasItem from '../../components/ComprasItem/ComprasItem';
import styles from './styles';
import ItemSeparator from '../../components/ItemSeparator/ItemSeparator'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = (props) => {
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => <TouchableOpacity>
            <Image 
                source={{ uri: 'https://gazetadoriopardo.com.br/wp-content/uploads/2019/03/gatos-de-interior.jpg'}} 
                style={{
                    height: 40,
                    width: 40,
                    borderRadius: 50,
                }}
                resizeMode='cover'
            />
            </TouchableOpacity>,
            headerLeft: () => <TouchableOpacity 
                style={{
                    height: 30,
                    width: 30,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onPress={() => props.navigation.openDrawer()}
            >
            <FontAwesome name='bars' size={25} />
        </TouchableOpacity>
        })
    }, []);

    return (
        <>
            <FlatList
                data={listaCompras}
                renderItem={({item}) => (
                    <ComprasItem 
                        id={item.id} 
                        nome={item.nome} 
                        itensSelecionados={item.itensSelecionados} 
                        itensTotal={item.itensTotal} 
                        onPress={() => props.navigation.navigate('Listagem')}
                    />
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listagem}
                ItemSeparatorComponent={() => <ItemSeparator />}
            />
        </>
    );
};

const listaCompras = [
    {
        id: 0,
        nome: 'Ano novo',
        itensSelecionados: 0,
        itensTotal: 20,
    },
    {
        id: 1,
        nome: 'Carnaval',
        itensSelecionados: 0,
        itensTotal: 20,
    },
    {
        id: 2,
        nome: 'Aniversário',
        itensSelecionados: 0,
        itensTotal: 20,
    },
    {
        id: 3,
        nome: 'Feriado',
        itensSelecionados: 0,
        itensTotal: 20,
    },
    {
        id: 4,
        nome: 'Compras do Mês',
        itensSelecionados: 0,
        itensTotal: 20,
    },
]

export default Home;