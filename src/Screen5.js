import React, {Component} from 'react';
import { StyleSheet, View,Dimensions,Text} from 'react-native';
import { Button, Icon } from 'native-base';
import  MapView  from 'react-native-maps';
import  Polyline  from '@mapbox/polyline';
import getDirections from 'react-native-google-maps-directions';

const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height;
const LATITUDE = 6.8872;
const LONGITUDE = 2.9876;
const LATITUDEDELTA = 0.0922;
const LONGITUDEDELTA = 0.0421;

export default class Screen5 extends Component {

  handleGetDirections = () => {
    const data = {
       source: {
        latitude: LATITUDE,
        longitude: LONGITUDE
      },
      params: [
        {
          key: "travelmode",
          value: "driving"
        },
        {
          key: "dir_action",
          value: "navigate"
        }
      ],
      waypoints: [
        {
          latitude: -33.8600025,
          longitude: 18.697452
        },
        {
          latitude: -33.8600026,
          longitude: 18.697453
        },
           {
          latitude: -33.8600036,
          longitude: 18.697493
        }
      ]
    }

    getDirections(data)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>
            Click the Button below to Locate a place via the Map
        </Text>
        <Button block rounded raised onPress={this.handleGetDirections} style = {{ backgroundColor: '#d8a409' }} title="Get Directions">
            <Text style={styles.txtt}>Locate Places</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    textAlign:'center'
  },
  txt:{
    color: 'black',
    fontSize:18,
    margin: 15,
    textAlign:'center'
  },
  txtt:{
    color: 'white',
    fontSize:18
  }
})
