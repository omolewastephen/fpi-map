import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView,StyleSheet, View,Image} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {Container, Text, List, ListItem, Header, Title,Accordion, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';


class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    console.log(route);
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <Container>
          <Content>
            <View
              style={{
                height: 200,
                alignSelf: "stretch",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#005123"
              }}>
              <Image source={require('./image/fpilogo.png')} style={styles.logo} />
              <Text style={styles.app_text}>FPI MAP</Text>
            </View>
            <View>
            <List>
                <ListItem itemDivider>
                  <Text>Menu</Text>
                </ListItem>

                <ListItem button onPress={() => this.props.navigation.navigate('Screen1') } icon>
                <Left>
                  <Button style={{ backgroundColor: "#e0a309" }}>
                    <Icon active name="home" />
                  </Button>
                </Left>
                <Body>
                  <Text>Home</Text>
                </Body>
                </ListItem>

                <ListItem button onPress={() => this.props.navigation.navigate('Screen2') } icon>
                <Left>
                  <Button style={{ backgroundColor: "#e0a309" }}>
                    <Icon name="navigate" />
                  </Button>
                </Left>
                <Body>
                  <Text>Get Direction</Text>
                </Body>
                </ListItem>

                <ListItem button onPress={() => this.props.navigation.navigate('Screen5') } icon>
                <Left>
                  <Button style={{ backgroundColor: "#e0a309" }}>
                    <Icon name="navigate" />
                  </Button>
                </Left>
                <Body>
                  <Text>Search Places</Text>
                </Body>
                </ListItem>

                <ListItem button onPress={() => this.props.navigation.navigate('Screen4') } icon>
                <Left>
                  <Button style={{ backgroundColor: "#e0a309" }}>
                    <Icon name="briefcase" />
                  </Button>
                </Left>
                <Body>
                  <Text>About FPI MAP</Text>
                </Body>
                </ListItem>

                <ListItem itemDivider>
                  <Text>Version</Text>
                </ListItem>
                <ListItem>
                  <Text>FPI-MAP V1.0</Text>
                </ListItem>
            </List>
            </View>
          </Content>
        </Container>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
  logo:{
    width:90,
    height:90
  },
  app_text:{
    fontFamily: 'Raleway_black',
    fontSize:40,
    color:'#FFF',
    margin:15
  }
})

export default SideMenu;
