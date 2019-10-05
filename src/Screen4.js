import React, {Component} from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet,Image } from 'react-native';
import { Drawer } from 'native-base';
import {View} from 'react-native';
import { Header, Title,Accordion, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';


export default class Screen4 extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Drawer>
      <Container>
        <View style={{flex:1,justifyContent:'center',alignItems:'center',margin:10}}>
          <Image source={require('./image/fpilogo.png')} style={{height:120,width:120}} />
          <Text style={{color:'black',fontSize:30,fontFamily:'Raleway',fontWeight:'bold',textAlign:'center'}}>About FPI MAP </Text>
          <Text style={{color:'black',fontSize:20,fontFamily:'Raleway',textAlign:'center'}}>
          FPI MAP is a map developed
          for the Federal Polytechnic,Ilaro. It is used for getting direction to various places
          in the Institution.
          </Text>
        </View>
      </Container>
      </Drawer>
    );
  }
}
