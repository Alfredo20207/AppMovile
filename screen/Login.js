/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Body, Button, Icon, Item,Input,Header, Label } from 'native-base';
import {StyleSheet} from 'react-native';


class Login extends Component {
  constructor(props){
    super(props);
    this.state={usuario: '', pass:'' };
  }
  render(){
  const navegar = this.props.navigation;
  return (
    
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
                      value= {this.state.usuario}
                      onChangeText={(usuario) => this.setState({usuario})}
                      />
                    </Item>
                    <Item lineLabel>
                      <Icon type = 'FontAwesome' name = 'lock'> </Icon>
                      <Input type="text" placeholder = 'Password'
                              value={this.state.pass}
                              onChangeText={(pass) => this.setState({pass})}
                              />                     
                    </Item>
                  </Body>
                </CardItem>
                <CardItem footer bordered>
                  <Button primary onPress={() => navegar.navigate('Registro')}><Text>Registrate</Text></Button>
                  <Button primary = {misEstilos.boton}
                  onPress={()=>navegar.navigate('Perfil', {pass:this.state.pass, usuario :this.state.usuario})}><Text> Iniciar Sesion </Text></Button>
                </CardItem>
              </Card>
        </Content>
      </Container>
    
   
  );
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
