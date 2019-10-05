import React, {Component} from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet,Image,View,Dimensions } from 'react-native';
import { Drawer } from 'native-base';
import  MapView,{ PROVIDER_GOOGLE, Marker }  from 'react-native-maps';
import { Header, Title,Accordion, Content, Footer, FooterTab, Button, Left, Right,Item,Input, Body, Icon } from 'native-base';

const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height;
const LATITUDE = 6.8872;
const LONGITUDE = 2.9876;
const LATITUDEDELTA = 0.0922;
const LONGITUDEDELTA = 0.0421;

export default class Screen1 extends Component{
  constructor(props){
    super(props);
    this.state = {
        error: null,
        location: {
          coords: { latitude: LATITUDE, longitude: LONGITUDE},
          viewport:{
              northeast:{lat: 6.88901, lng: 3.01416},
              southwest:{lat: 6.88901, lng: 3.01416},
           }
        },
        initialPosition: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDEDELTA,
            longitudeDelta: LONGITUDEDELTA,

        },
        markerPosition: {
            latitude: LATITUDE,
            longtitude: LONGITUDE,

        }
    }
  }
 watchID: ? number = null
 componentDidMount() {
   const latDelta = this.state.location.viewport.northeast.lat - this.state.location.viewport.southwest.lat;
   const lngDelta = latDelta * ASPECT_RATIO;
     navigator.geolocation.getCurrentPosition(
         (position) => {
             var lat = this.state.initialPosition.latitude
             var longi = this.state.initialPosition.longitude
             var initialRegion = {
                 latitude: lat,
                 longitude: longi,
                 longitudeDelta: LONGITUDEDELTA,
                 latitudeDelta: LATITUDEDELTA
             }
             this.setState({ initialPosition: initialRegion })
             this.setState({ markerPosition: initialRegion })
         },
         (error) => this.setState({ error: error.message }),
         { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 })

     this.watchID = navigator.geolocation.watchPosition( (position) => {

         var lat = parseFloat(position.coords.latitude)
         var long = parseFloat(position.coords.longitude)

         var lastRegion = {
             latitude: lat,
             longitude: long,
             longitudeDelta: LONGITUDEDELTA,
             latitudeDelta: LATITUDEDELTA

         }
         this.setState({ initialPosition: lastRegion })
         this.setState({ markerPosition: lastRegion })
     },
      (error) => this.setState({ error: error.message })
   )
 }
 componentWillUnmount() {
     navigator.geolocation.clearWatch(this.watchID)
 }

getInitialState() {
return {
  coordinate: new AnimatedRegion({
    latitude: LATITUDE,
    longitude: LONGITUDE,
  }),
};
}


onRegionChange(region) {
  this.setState({ region });
}


  render(){
    return (
      <Container>
             <View style={styles.container}>
                 <MapView
                     showsUserLocation={true}
                     provider={ PROVIDER_GOOGLE }
                     mapType="standard"
                     loadingEnabled = {true}
                     style={styles.map}
                     region={this.state.initialPosition}
                     initialRegion={this.state.initialRegion}>
                     <MapView.Marker coordinate={this.state.location.coords}>
                         <View style={styles.radius}>
                             <View style={styles.marker}>
                             </View>
                         </View>
                     </MapView.Marker>
                 </MapView>
             </View>
             <View>

             </View>
         </Container>
    );
  }
}

const styles = StyleSheet.create({
    radius: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        overflow: 'hidden',
        backgroundColor: 'rgba(10,122,255,0.1)',
        borderWidth: 1,
        borderColor: 'rgba(0,122,255,0.3)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    marker: {
        height: 20,
        width: 20,
        borderWidth: 3,
        overflow: 'hidden',
        backgroundColor: 'red',
        borderColor: 'white',
        borderRadius: 20 / 2
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },

    map:
    {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute'
    },

});
