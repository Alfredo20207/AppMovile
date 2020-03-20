import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, CardItem, Body, Card, Text, Icon, Button } from 'native-base';
import {StyleSheet, AppRegistry, TextInput, View, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import api from '../data/api';
//import api from '../data/api';
                                                                                                                                   

class Registro extends Component {
  //Alert.alert(state.status);
 /* constructor(props) { 
    super(props)
    this.state = {
      email: '',
      user: '',
      pass : ''
    }
  }
*/

    constructor(props){
      super(props);
      this.state = {
        email: '',
        user: '',
        pass: ''
      }
    }

 //register = () => api.registerData(this.state.email, this.state.user, this,state.pass);
  register = () => api.registerData(this.state.email, this.state.user, this.state.pass);
  render() {
    const navegar = this.props.navigation;

    return (
        <Container>
            <Content padder contentContainerStyle = {misEstilos.content}>          
              <Card>
                <CardItem header bordered>
                  <Text>Registro</Text>
                </CardItem>
                <CardItem bordered>
                  <Body style = {misEstilos.body}>  

                    <Item inlineLabel>  
                      <Icon type = 'FontAwesome' name = 'email'> </Icon>
                      <Input placeholder = 'Correo electronico'
                      onChangeText = {(email)=>this.setState({email})}/>
                    </Item>      

                    <Item inlineLabel>  
                      <Icon type = 'FontAwesome' name = 'user'> </Icon>
                      <Input placeholder = 'Nombre de usuario'
                      onChangeText = {(user)=>this.setState({user})}/>
                    </Item>

                    <Item inlineLabel>  
                      <Icon type = 'FontAwesome' name = 'lock'> </Icon>
                      <Input placeholder = 'Password' 
                      onChangeText = {(pass)=>this.setState({pass})}/>
                    </Item>
                    
                   
                  </Body>
                </CardItem>
                <CardItem footer bordered>
                  <Button primary = {misEstilos.boton} onPress= {this.register}><Text> Registrar </Text></Button>
                  <Button primary onPress={() => navegar.navigate('Principal2')}><Text>especies</Text></Button>
                </CardItem>
                <CardItem footer bordered style = {misEstilos.pie}>
                    <Button danger style = {misEstilos.izquierda}><Icon type = 'AntDesign' name = 'googleplus'></Icon></Button>
                    <Button danger style = {misEstilos.centrar}><Icon type = 'Entypo' name = 'facebook'></Icon></Button>
                </CardItem>

                
              </Card>
        </Content>           
      </Container>
    );
  }
}


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
    },

    izquierda :{
      flex : 1,
      backgroundColor : 'red',
      alignItems: 'flex-end',
      justifyContent: 'center'
  },

  centrar :{
       flex: 1,
       backgroundColor: 'blue',
       alignItems: 'center',
       justifyContent:'center'

  },
  pie:{
      flex : .5,
      flexDirection: 'row',
      alignItems: 'flex-start'
  },
  MainContainer :{
    justifyContent : 'center',
    flex : 1,
    margin : 10
  },

  TextInputStyleClass:{
    textAlign : 'center',
    marginBottom: 7,
    height : 40,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius : 5,
  }
  
  
  });

  export default Registro;