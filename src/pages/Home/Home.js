import React from 'react';
import { FlatList } from 'react-native';
import ComprasItem from '../../components/ComprasItem/ComprasItem';
import Header from '../../components/Header/Header';
import styles from './styles';
import ItemSeparator from '../../components/ItemSeparator/ItemSeparator'; 

const Home = () => {
    return (
        <>
            <Header iconName='bars' screenTitle='Minha Lista' />
            <FlatList
                data={listaCompras}
                renderItem={({item}) => (
                    <ComprasItem 
                        id={item.id} 
                        nome={item.nome} 
                        itensSelecionados={item.itensSelecionados} 
                        itensTotal={item.itensTotal} 
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