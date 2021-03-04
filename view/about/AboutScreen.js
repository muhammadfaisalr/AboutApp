import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, StatusBar  } from 'react-native'
import { Card, Input, Icon, Avatar, Button, ButtonGroup } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { Contact } from "../../data/Contact";
import { Portfolio } from "../../data/Portfolios";
import CollapsibleView from "@eliav2/react-native-collapsible-view";


export default function AboutScreen() {
    useEffect(() => {
        console.log('About Screen');
    }, [])

    const component1 = () => <Text>Hello</Text>
    const component2 = () => <Text>World</Text>
    const component3 = () => <Text>ButtonGroup</Text>

    const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]

    return(
        <View style={style.container}>
            <View style={style.content}>    
                <Avatar
                    rounded
                    source={require('../../assets/image/profile.jpg')}
                    size='large'
                    containerStyle={style.margin}/>

                <Text style={{color : 'white'}}>Muhammad Faisal R</Text>
                 
                <Text style={{color : 'white'}}>Software Engineer</Text>

                <Button
                    icon={
                        <Icon
                            name="suitcase"
                            size={24}
                            type='font-awesome'
                            color="blue"
                            containerStyle={{marginRight : 8, marginLeft :8}}
                        />
                    }
                    iconLeft
                    title="Recruit"
                    buttonStyle={{margin : 16, backgroundColor : 'white', borderRadius : 16}}
                    titleStyle={{color : 'blue', marginRight :8}} />

                    <View style={style.topRadius}>
                    <CollapsibleView title='Contact' style={{borderWidth : 0}}>
                    <FlatList
                            data={Contact}
                            keyExtractor= {(item) => item.id}
                            renderItem={({item}) => {
                                return(
                                    <>
                                    <TouchableOpacity style={style.spacingRow}>
                                            
                                        <Card containerStyle={style.cardAccent}>
                                            <View style={{flexDirection : 'row'}}>
                                                <Image source={item.image} style={{width : 32, height :32}}/>

                                                <View style={{flexDirection : 'column', paddingLeft : 16}}>
                                                    <Text>{item.name}</Text>
                                                    <Text>{item.value}</Text>    
                                                </View>
                                            </View>
                                            
                                        </Card>
                                    </TouchableOpacity>
                                    </>
                                )
                            }}>

                        </FlatList>
                    </CollapsibleView>
                    <CollapsibleView title='Portfolio' style={{borderWidth : 0}}>
                    <FlatList
                            data={Portfolio}
                            keyExtractor= {(item) => item.id}
                            renderItem={({item}) => {
                                return(
                                    <>
                                    <TouchableOpacity style={style.spacingRow}>
                                            
                                        <Card containerStyle={style.cardAccent}>
                                            <View style={{flexDirection : 'row'}}>
                                                <Image source={item.image} style={{width : 32, height :32}}/>

                                                <View style={{flexDirection : 'column', paddingLeft : 16}}>
                                                    <Text>{item.title}</Text>
                                                    <Text>{item.value}</Text>    
                                                </View>
                                            </View>
                                            
                                        </Card>
                                    </TouchableOpacity>
                                    </>
                                )
                            }}>

                        </FlatList>
                    </CollapsibleView>
                    </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#1437FE',
        width : '100%'
    },

    scene: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },

    header : {
        minWidth : '100%',
        height : 50,
        backgroundColor : '#1437FE',
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
        marginTop : 48,
        alignItems : 'center'
    },

    cardIcon : {
        maxHeight : 24,
        maxWidth : 24,
    },

    topRadius :{
        width : '100%',
        height : '100%',
        backgroundColor : 'white',
        borderRadius : 16
    },

    margin : {
        margin : 16
    },
    cardAccent : {
        width: '100%', 
        height: 'auto', 
        backgroundColor: '#FFF',
        borderRadius : 16,
        alignItems : 'center',
        flexDirection : 'row',
        borderWidth : 0
    },
    
    spacingRow : {
        flexDirection : 'row',
        padding : 2,
        justifyContent : 'space-between'
    },

})