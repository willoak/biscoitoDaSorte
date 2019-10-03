import React, {Fragment, Component} from 'react';
import { 
  StyleSheet,
  View,
  Text, Button, TouchableOpacity, Image,
} from 'react-native';

//botao customizavel
class Botao extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.styles2 = StyleSheet.create({
      botao: {
        width:250,
        height: 40,
        backgroundColor: props.cor,
        borderRadius:10,
      },
      botaoArea: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      texto: {
        color: 'white'
      }
    });
  }
  render(){
    return (
      <TouchableOpacity style={this.styles2.botao} onPress={this.props.onPress}>
        <View style={this.styles2.botaoArea}>
          <Text style={this.styles2.texto}> {this.props.textoB} </Text>
        </View>
      </TouchableOpacity>
    );
  }
}


export default class App extends Component {
  mostrarMensagem(){
    alert("Mostrando mensagem");
  }
  render (){
    return(
      <View style={styles.corpo}>
        <Image source={require('./images/cookie.png')} />
        <Text>Frase do dia</Text>
        <Botao cor="green" textoB="Clique para ver a sorte" onPress={this.mostrarMensagem} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  corpo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


