import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {View,Constants,StatusBar,ScrollView } from 'react-native';

class MapInput extends React.Component{
  render(){
    return(
      <GooglePlacesAutocomplete
        placeholder= "Search Location"
        minLength = {2}
        autoFocus ={true}
        returnKeyType={'search'}
        listViewDisplayed={false}
        fetchDetails={true}
        renderDescription={row => row.description}
        onPress={(data,details=null) =>{
          this.props.notifyChange(details.geometry.location);
        }}
        query={{
          key: 'AIzaSyCPk9gZCz5771iYX2plkTUu-St7FMf0hDc',
          language:'en'
        }}
        currentLocation={true}
        currentLocationLabel="Current location"
        nearbyPlacesAPI = 'GooglePlacesSearch'
        debounce={200}
        styles={{
          textInputContainer:{
            backgroundColor:'rgba(0,0,0,0)'
          },
          textInput: {
            marginLeft: 10,
            marginRight: 10,
            height: 50,
            color: '#5d5d5d',
            fontSize: 16
          },
          predefinedPlacesDescription: {
            color: '#1faadb'
          },
          listView: {
            elevation: 1,
          },
          row:{
            backgroundColor:"white"
          }
      }}
      />
    )
  }
}

export default MapInput;
