import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Card, Input, Icon } from "react-native-elements";
import { useHistory } from 'react-router-dom';
import AboutScreen from '../about/AboutScreen'

export default function LoginScreen(){

    const history = AboutScreen()

    useEffect(() => {
        console.log('Login Screen');
    }, [])

    function moveToAbout(){
        history.push('/about')
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <View style={style.subHeader}>
                    <View style={style.subContentHeader}>
                        <Text style={{color : 'blue', fontSize : 28, marginTop : 32}}>Hirers</Text>
                    </View>
                </View>
            </View>
            <View style={style.content}>
                <Card containerStyle={style.cardAccent  }>
                    <Image source={require('../../assets/icon/key.png')}></Image>
                </Card>
                <Text style={{fontSize : 24, margin : 16} }>Let's Take a Journey</Text>
                <Input
                    style={style.margin}
                    placeholder='Email'/>
                <Input
                    style={style.margin}
                    placeholder='Password'
                    secureTextEntry={true}/>
                    
                    <TouchableOpacity style={position.parentEnd}>            
                        <Icon
                            reverse
                            name='arrow-forward-outline'
                            type='ionicon'
                            color='#B5CFE4'
                            onPress={() =>{
                                moveToAbout()
                            }}/>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white'
    },

    header : {
        minWidth : '100%',
        height : 50,
        backgroundColor : 'white',
        marginTop : 30,
        justifyContent : 'center'
    },
    subHeader : {
        alignItems : 'center',
        paddingHorizontal : 18,
    },

    subContentHeader:{
        alignItems : 'center'
    },

    content : {
        margin : 16
    },

    cardIcon : {
        maxHeight : 24,
        maxWidth : 24,
    },

    margin : {
        margin : 16
    },
    cardAccent : {
        width: 64, 
        height: 'auto', 
        backgroundColor: '#B5CFE4',
        borderRadius : 16,
        borderWidth : 0
    }

})

const position = StyleSheet.create({
    parentEnd:{
        justifyContent : 'center',
        alignItems : 'center',
        alignSelf : 'flex-end'
    } 
})

const color = StyleSheet.create({
    blue : {
        color : 'blue'
    },
    blueAccent : {
        color : '#B5CFE4'
    }
})