import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, CardItem, Body, Card, Text, Icon, Button } from 'native-base';
import {StyleSheet} from 'react-native';

                                                                                                                                   

class Registro extends Component {
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
                      <Icon type = 'FontAwesome' name = 'user'> </Icon>
                      <Input placeholder = 'Nombre de usuario'/>
                    </Item>

                    <Item inlineLabel>  
                      <Icon type = 'FontAwesome' name = 'email'> </Icon>
                      <Input placeholder = 'Correo'/>
                    </Item>

                    <Item inlineLabel>  
                      <Icon type = 'FontAwesome' name = 'lock'> </Icon>
                      <Input placeholder = 'Password'/>
                    </Item>

                    <Item inlineLabel last>
                      <Icon type = 'FontAwesome' name = 'lock'> </Icon>
                      <Input placeholder = 'Confirmacion Password'/>                     
                    </Item>
                  </Body>
                </CardItem>
                <CardItem footer bordered>
                  <Button primary = {misEstilos.boton}><Text> Check In</Text></Button>
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
  }
  
  
  });

  export default Registro;