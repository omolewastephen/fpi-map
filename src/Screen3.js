import React,{Component} from 'react';
import { View,ScrollView } from 'react-native';
import MapInput from './comp/MapInput';
import { MyMapView } from './comp/MyMapView';
import { getLocation } from './comp/LocationService';
import { Header, Title,Accordion,Container, Content, Footer, FooterTab, Button, Left, Right,Item,Input, Body, Icon } from 'native-base';

export default class Screen3 extends React.Component {
  state = {
    region: {},
  };

  componentDidMount() {
    this.getInitialState();
  }

  getInitialState() {
    getLocation().then(data => {
      this.updateState({
        latitude: data.latitude,
        longitude: data.longitude,
      });
    });
  }

  updateState(location) {
    this.setState({
      region: {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      },
    });
  }

  getCoordsFromName(loc) {
    this.updateState({
      latitude: loc.lat,
      longitude: loc.lng,
    });
  }

  onMapRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ position: 'absolute', width: '100%', zIndex: 9999, top: 10 }}>
          <MapInput notifyChange={loc => this.getCoordsFromName(loc)} />
        </View>
        {this.state.region['latitude'] ? (
          <View style={{ flex: 1 }}>
            <MyMapView
              region={this.state.region}
              onRegionChange={reg => this.onMapRegionChange(reg)}
            />
          </View>
        ) : null}
      </View>
    );
  }
}
