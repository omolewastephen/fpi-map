import React from 'react';
import { AppRegistry } from 'react-native';
import  MapView,{ PROVIDER_GOOGLE, Marker }  from 'react-native-maps';

export const MyMapView = (props) =>{
  return(
    <MapView
      style={{flex:1}}
      region={props.region}
      showsUserLocation={true}
      followsUserLocation={true}
      animated={true}
      showsCompass={true}
      moveOnMarkerPress={true}
      showsUserLocation={true}
      showsMyLocationButton={true}
      mapType='standard'
      provider='google'
      onRegionChange= {(reg) => props.onRegionChange(reg)}>

      <MapView.Marker coordinate={props.region}/>
    </MapView>
  )
}

AppRegistry.registerComponent('MyMapView',  () => MyMapView);
