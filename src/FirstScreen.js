import React, {Component} from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet,Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Text , Header,Title,Accordion, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';


export default class FirstScreen extends Component{
  constructor(props){
    super(props);
  }


  render(){
    return (
      <Container style={{backgroundColor:'#060f2b'}}>
        <Grid>
          <Row style={{height: 370,justifyContent:'center',alignItems:'center' }}>
            <Col style={{justifyContent:'center',alignItems:'center'}}>
                <Image source={require('./image/fpilogo.png')} style={styles.logo} />
                <Text style={styles.app_text}>FPI MAP</Text>
                <Text style={styles.describe}> App to get the location and direction of several places in the school.</Text>
            </Col>
          </Row>

          <Row style={{height:150,margin:10}}>
            <Col style={{justifyContent:'center',alignItems:'center' }}>
              <Button onPress={() => {this.props.navigation.navigate('Main')} } style = {{ backgroundColor: '#d8a409' }} iconLeft block rounded raised>
                <Icon name='paper-plane' />
                <Text>Let's Go</Text>
              </Button>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  logo:{
    width:150,
    height:150
  },
  app_text:{
    fontFamily: 'Raleway_black',
    fontSize:40,
    color:'#FFF',
    margin:15
  },
  describe:{
    fontFamily:'Raleway',
    fontSize:20,
    color:'#FFF',
    marginTop:25,
    textAlign:'center'
  }
})
