import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import {Header, Item, Icon, Input} from 'native-base';
import PokeLoader from './PokeLoader';
//import SearchBody from './SearchBody';
import SearchBody from './SearchBody';

import axios from 'axios';


const Stack = createStackNavigator();

class Search extends Component{
    state ={
        pokeSearch: "",
        onCall : true,
        data : {}
    }

    searchPoke = () =>{
        this.setState({onCall : true});
        var self = this;
        axios.get("http://pokeapi.co/api/v2/pokemon"+this.state.pokeSearch.toLowerCase())
        .then(function(response){
            console.log(response.data);
            self.setState({data : response.data});
            self.setState({onCall: flase});
        })
        .catch(function(error){
            console.log(error);
        });
    }

    renderBody = () =>{
        if(this.state.onCall){
            return(
                <PokeLoader />
            )
        }
        else {
            return(
                <SearchBody data={this.state.data}/>
            )
        }
    }

    render (){
        return(
            <View style={{flex : 1}}>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" onPress={this.searchPoke}/>
                        <Input 
                            value={this.state.pokeSearch}
                            placeholder="Search Pokemon"
                            onChangeText={(pokeSearch)  => this.setState({pokeSearch})}
                        />
                    </Item>
                </Header>
                {this.renderBody()}
            </View>
        )

    }
}

export default Search;