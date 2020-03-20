/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Body, Button, Icon, Item,Input,Header, Label, View } from 'native-base';
import {ActivityIndicator, AppRegistry, TextInput, Alert, StyleSheet} from 'react-native';



import api from '../data/api';

class Login extends Component {  
  constructor(props){
    super(props)
    this.state={
      username: '',
      pass: ''
    }
  }

  login = async() => {
    let validarLog = await api.validarLog(this.state.username, this.state.pass);

    if(validarLog.status == 1){
      this.props.navigation.navigate('Principal');
    }
    else{
      Alert.alert('Usuario o clave invalidos');
    }
  }

  
  render(){
  const navegar = this.props.navigation;
  

    if(this.state.showIndicator){
      return (
        <View style= {misEstilos.content}>
          <ActivityIndicator size="large" color="#36FF0E"></ActivityIndicator>
        </View>
      )
    }else{
      return(

        <Container>
        <Content padder contentContainerStyle = {misEstilos.content}>          
              <Card>
                <CardItem header bordered>
                  <Text>Inicio de sesion</Text>
                </CardItem>
                <CardItem bordered>
                  <Body style = {misEstilos.body}>        
                    <Item lineLabel>  
                      <Icon type = 'FontAwesome' name = 'user'> </Icon>
                      <Input type="text" placeholder = 'Nombre de usuario'
                     // value= {this.state.usuario}
                      onChangeText={(username=>this.setState({username}))}
                      />
                    </Item>
                    <Item lineLabel>
                      <Icon type = 'FontAwesome' name = 'lock'> </Icon>
                      <Input type="text" placeholder = 'Password'
                          //    value={this.state.pass}
                              onChangeText={(pass)=>this.setState({pass})}
                              />                     
                    </Item>
                  </Body>
                </CardItem>
                <CardItem footer bordered>
                  <Button 
                  primary 
                  onPress = {() => {
                    navegar.navigate('Registro', {
                      titulo: 'Registro de usuario',
                      nombre: 'Tibu',
                    });
                  }}>
                    <Text>Registro</Text>
                  </Button>
                  <Button primary = {misEstilos.boton}
                  onPress={() => {this.login()}}><Text> Iniciar Sesion </Text></Button>
                </CardItem>
              </Card>
        </Content>
      </Container>

      );
      
    }
  
  } 
};

const misEstilos = StyleSheet.create({
  content: {
    flex : 1,
    justifyContent : 'center',
  },
  textCenter:{
      textAlign: 'center',
      width : '100%'
  },

  boton:{
    marginLeft : '70%',
  },

  body: {
    paddingVertical : 35,
  }


});

export default Login;
