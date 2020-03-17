import React, { Component } from 'react';
import {Text, View} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';
import { Container, Header, Content, Form, Item, Input, Label, CardItem, Body, Card, Icon, Button } from 'native-base';


class Principal2 extends Component{
        constructor(props){
            super(props);
            this.state = {isLoading: true}
        } //end constructor
        
            async componentDidMount(){
                try {
                    const response = await fetch('https://swapi.co/api/species');
                    const responseJson = await response.json();
                    this.setState({
                        isLoading: false,
                        dataSource: responseJson.movies,
                    }, function () {
                    });
                }
                catch (error) {
                    console.error(error);
                    ;
                }

            }//end componentDidMount

            render(){
                
                if(this.isLoading){
                    return(
                        <View style={{flex: 1, padding: 20}}>
                            <ActivityIndicator/>
                        </View>
                    );
                }

                return(
                    <View>
                        <FlatList 
                        data={this.state.dataSource}
                        renderItem  = {({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
                        keyExtractor = {({id}, index) => id}
                        />
                    </View>
                );
            }
    
}

export default Principal2;