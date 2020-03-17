import React, {Component} from 'react';
import {ScrollView, Text, View,Image, FlatList} from 'react-native';
import {FlatItem, List} from 'native-base';
//nota cambiar tosdos los list por flat<
class SearchBody extends Component{
    render(){
        const navegar = this.props.navigation;

        var pokemon = this.props.data;
        if(!pokemon){
            return <View/>
        }

        return(
            <ScrollView style ={{flex : 1}}>
               <Text style={styles.header}>#{pokemon.id} - {pokemon.name.toUpperCase()}</Text>
                <View style={styles.viewStyle}>
                    <Image
                        source={{url : pokemon.sprites.font_default}}
                        style={styles.img}
                    />
                </View>

                <View style={styles.info}>
                    <FlatItem  itemDivider>
                        <Text style={{fontWeight: 'bold'}}> 
                            Size                            
                        </Text>
                    </FlatItem>
                    <FlatItem  itemDivider>
                        <Text> 
                            Weigth - {pokemon.weight}   Kg                     
                        </Text>
                    </FlatItem>
                    <FlatItem  itemDivider>
                        <Text> 
                            Height - {pokemon.height/10}  M  
                        </Text>
                    </FlatItem>

                    <FlatItem  itemDivider>
                        <Text style={{fontWeight: 'bold'}}> 
                            Abilities                   
                        </Text>
                    </FlatItem>
                    <FlatList 
                    dataArray={pokemon.abilities}
                    renderRow={(item)=> 
                        <FlatItem>
                            <Text>{item.abilities.name}</Text>
                        </FlatItem>
                    }>

                    
                    </FlatList>

                </View>
            </ScrollView>
        )
    }
}


const styles ={
    header:{
        fontSize : 30,
        color: 'red',
        textAlign: 'center'
    },
    viewStyle:{
        justifyContent : 'center',
        alignItems : 'center',
        flex: 1
    },
    img:{
        height : 200,
        width : 200,
        justifyContent : 'center',
        alignItems: 'center'
    },
    info :{
        flex: 1,
        backgroundColor : 'white',
        opacity : 0.8
    }

}

export default SearchBody;