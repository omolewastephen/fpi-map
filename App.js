import React, {Component} from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import { AppRegistry,View, Image, TouchableOpacity,Text} from 'react-native';
import { DrawerItems , Icon,Header,Left,Button,Body,Title} from 'native-base';
import SideMenu from './src/SideMenu';
import FirstScreen from './src/FirstScreen';
import MapScreen from './src/MapScreen';
import Screen1 from './src/Screen1';
import Screen2 from './src/Screen2';
import Screen3 from './src/Screen3';
import Screen4 from './src/Screen4';
import Screen5 from './src/Screen5';

import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';


const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      header: <Header style={{backgroundColor:'#005123'}}
                 >
                 <Left>
                  <Button navigationProps={navigation} onPress={ () => navigation.toggleDrawer() } transparent>
                    <Icon name='menu' />
                  </Button>
                </Left>
                <Body>
                  <Title style={{fontSize:20,fontFamily:'Raleway_black'}}>Home</Title>
                </Body>
              </Header>,
    }),
  },
});

const Screen2_StackNavigator = createStackNavigator({
    Second: {
      screen: Screen2,
      navigationOptions: ({ navigation }) => ({
        title: 'Get Direction',
        header: <Header style={{backgroundColor:'#005123'}}>
                   <Left>
                    <Button navigationProps={navigation} onPress={ () => navigation.toggleDrawer() } transparent>
                      <Icon name='menu' />
                    </Button>
                  </Left>
                  <Body>
                    <Title style={{fontSize:20,fontFamily:'Raleway_black'}}>Get Direction</Title>
                  </Body>
                  </Header>
      }),
    },
});

const Screen3_StackNavigator = createStackNavigator({
    Second: {
      screen: Screen3,
      navigationOptions: ({ navigation }) => ({
        title: 'Get Direction',
        header: <Header style={{backgroundColor:'#005123'}}>
                   <Left>
                    <Button navigationProps={navigation} onPress={ () => navigation.toggleDrawer() } transparent>
                      <Icon name='menu' />
                    </Button>
                  </Left>
                  <Body>
                    <Title style={{fontSize:20,fontFamily:'Raleway_black'}}>Search Location</Title>
                  </Body>
                  </Header>
      }),
    },
});

const Screen4_StackNavigator = createStackNavigator({
  Fourth: {
    screen: Screen4,
    navigationOptions: ({ navigation }) => ({
      title: 'Location',
      header: <Header style={{backgroundColor:'#005123'}}>
                 <Left>
                  <Button navigationProps={navigation} onPress={ () => navigation.toggleDrawer() } transparent>
                    <Icon name='menu' />
                  </Button>
                </Left>
                <Body>
                  <Title style={{fontSize:20,fontFamily:'Raleway_black'}}>About FPI MAP</Title>
                </Body>
                </Header>
                 ,
    }),
  },
});
const Screen5_StackNavigator = createStackNavigator({
  Fourth: {
    screen: Screen5,
    navigationOptions: ({ navigation }) => ({
      title: 'Location',
      header: <Header style={{backgroundColor:'#005123'}}>
                 <Left>
                  <Button navigationProps={navigation} onPress={ () => navigation.toggleDrawer() } transparent>
                    <Icon name='menu' />
                  </Button>
                </Left>
                <Body>
                  <Title style={{fontSize:20,fontFamily:'Raleway_black'}}>Location</Title>
                </Body>
                </Header>
                 ,
    }),
  },
});

const AuthStack = createStackNavigator({
  FirstScreen: {screen:FirstScreen,navigationOptions: { header: null }  },
},
{
  initialRouteName: 'FirstScreen'
}
);

const DrawerNavigatorExample = createDrawerNavigator({
  Screen1: {
    screen: FirstActivity_StackNavigator,
      navigationOptions: {
        header:null,
      },
  },
  Screen2: {
    screen: Screen2_StackNavigator,
    navigationOptions: {
      header:null,
    },
  },
  Screen3: {
    screen: Screen3_StackNavigator,
    navigationOptions: {
      header:null,
    },
  },
  Screen4: {
    screen: Screen4_StackNavigator,
    navigationOptions: {
      header:null,
    },
  },
  Screen5: {
    screen: Screen5_StackNavigator,
    navigationOptions: {
      header:null,
    },
  }
},{
   contentComponent: SideMenu,
   drawerWidth: 250
});

const AppContainer =  createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      Main: DrawerNavigatorExample,
   }
)
);

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      isReady: false
    }
  }
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };

  async componentDidMount(){
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Raleway: require('native-base/Fonts/Raleway-Regular.ttf'),
      Raleway_black: require('native-base/Fonts/Raleway-Black.ttf'),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    }).then((err) =>{
      this.setState({ isReady: true });
    }).catch((err) =>{
       console.log(err);
    })

  }


  render(){
    if(!this.state.isReady){
      return(
        <AppLoading/>
      )
    }

    return(
      <AppContainer/>
    )
  }
}
