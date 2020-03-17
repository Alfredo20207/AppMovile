import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {Container,Content,Card,CardItem, Text,Button} from 'native-base';
//import ToggleSwitch from  'toggle-switch-react-native';
import { Switch } from 'react-native-paper';



  class Perfil extends Component{
      state = {
          switchValue: false
      };
      render(){

      const navegar = this.props.navigation;
       return(
           <>
           <Container>
               <Content>
                   <Card>
                       
                        <Text style={misEstilos.textStyle}>{this.state.switchValue? 'on' : 'off'}</Text>
                        <Switch
                            value={this.state.switchValue}
                            onValueChange={(switchValue)=>this.setState({switchValue})}/>


                       <CardItem>
                            <Text style={misEstilos.textCenter}>Welcome</Text>
                       </CardItem>
                       <CardItem>
                             <Text style={misEstilos.textCenter}> User:{this.props.route.params.usuario}</Text>
                       </CardItem>
                       <CardItem>
                             <Text style={misEstilos.textCenter}> Password:{this.props.route.params.pass}</Text>
                       </CardItem>
                       <CardItem>
                           <Button dark style={misEstilos.centrar} onPress={() =>
                        navegar.navigate('Login')}><Text>Exit</Text></Button>

                        <Button primary onPress={() => navegar.navigate('Principal')}><Text>Principal</Text></Button>

                       </CardItem>
                   </Card>
               </Content>
           </Container>
           </>
       );
      }
  };


  const misEstilos =StyleSheet.create({
      content:{
          backgroundColor:'#7ADB24',
          flex:1,
          justifyContent:'center',
      },
      textCenter:{
        fontSize: 36,
        color:'blue',
        textAlign:'center',
        width:'100%'
      },
      
      centrar:{
          flex:3,
          marginLeft:'10%',
          marginRight:'10%',
          justifyContent:'center'
      },
      body:{
          paddingVertical:35,
          backgroundColor:'#7ADB24'
      },

      textStyle:
      {
          margin : 12,
          fontSize: 25,
          fontWeight: 'bold',
          textAlign: 'center',
          color : '#344953'
      }, 
      
  });

  export default Perfil;