import React, {Component} from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Header, Title,Accordion, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';


export default class MapScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      isReady: false
    }
  }



  render(){

    return (
      <Container>
        <Header />
        <Content padder>

        </Content>
      </Container>
    );
  }
}
