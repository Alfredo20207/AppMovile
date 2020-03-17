import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, CardItem, Body, Card, Text, Icon, Button } from 'native-base';
import {StyleSheet, AppRegistry, TextInput, View, Alert} from 'react-native';

                                                                                                                                   

class Registro extends Component {

  constructor(props) { 
    super(props)
    this.state = {
      UserEmail: '',
      UserPassword: '',
      UserName : ''
    }
  }

  render() {
    const navegar = this.props.navigation;

    
    UserLoginFunction = () =>{

      const {UserName} = this.state;
      const {UserEmail} = this.state;
      const {UserPassword} = this.state;

      fetch('https://reactnativecode.000webhostapp.com/user_registration.php',{
        method : 'POST',
        headers :{
          'Accept' : 'aplication/json',
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({

          name:  UserName,
          email: UserEmail,
          password :UserPassword
        })
      }).then((response) => response.json())
          .then(responseJson => {

          if(responseJson === 'DataMatched')
          {
            this.props.navigation.navigate('Second' , {Email : UserEmail})
          }
          else{
            Alert.alert(responseJson);
          }

            
          }).catch((error) => {
            console.error(error);
          });
    }

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
                      <Icon type = 'FontAwesome' name = 'user'> </Icon>
                      <Input placeholder = 'Nombre de usuario' onChangeText
                      ={UserName => this.setState({UserName})}/>
                    </Item>

                    <Item inlineLabel>  
                      <Icon type = 'FontAwesome' name = 'email'> </Icon>
                      <Input placeholder = 'Correo' onChangeText
                      ={UserEmail => this.setState({UserEmail})}/>
                    </Item>

                    <Item inlineLabel>  
                      <Icon type = 'FontAwesome' name = 'lock'> </Icon>
                      <Input placeholder = 'Password' onChangeText
                      ={UserPassword => this.setState({UserPassword})}/>
                    </Item>
                    
                    <Item inlineLabel last>
                      <Icon type = 'FontAwesome' name = 'lock'> </Icon>
                      <Input placeholder = 'Confirmacion Password'/>                     
                    </Item>
                  </Body>
                </CardItem>
                <CardItem footer bordered>
                  <Button primary = {misEstilos.boton} onPress={this.UserLoginFunction}><Text> Check In</Text></Button>
                  <Button primary onPress={() => navegar.navigate('Principal2')}><Text>especies</Text></Button>
                </CardItem>
                <CardItem footer bordered style = {misEstilos.pie}>
                    <Button danger style = {misEstilos.izquierda}><Icon type = 'AntDesign' name = 'googleplus'></Icon></Button>
                    <Button danger style = {misEstilos.centrar}><Icon type = 'Entypo' name = 'facebook'></Icon></Button>
                </CardItem>

                
              </Card>
        </Content>


                <Button primary onPress={() => navegar.navigate('Login')}><Text>Login</Text></Button>
                
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