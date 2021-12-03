import React, { Component } from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const frases = [
  'Bom Dia!',
  'Boa Tarde!',
  'Boa Noite!',
]

class FrasesAleatorias extends Component {
  constructor(){
    super();
    this.state = {
      frase: 'Bom dia',
    }
  }
  trocarFrase = () => this.setState({ frase: frases[Math.floor(Math.random() * frases.length)]})
  render() {
    return (
      <View>
        <Text style={{ fontSize: 50 }}>{this.state.frase}</Text>
        <TouchableOpacity onPress={() => this.trocarFrase()}>
          <Text style={{ fontSize: 20 }}>Pressionar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class AppClass extends Component {
  render() {
    return (
      <FrasesAleatorias />
    )
  }
}

export default AppClass;
