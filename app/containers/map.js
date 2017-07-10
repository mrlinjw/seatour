import React, { Component } from 'react';
import{
  StyleSheet,
  Dimensions,
  View,
  Text
}from 'react-native';

import {
  MapView,
  MapTypes,
  MapModule,
  Geolocation
} from 'react-native-baidu-map';

import Tool from '../utils/tool';

const width =  Dimensions.get('window').width;
const height =  Dimensions.get('window').height;

export default class Map extends Component{
  constructor(props){
    super(props);
    this.state = {
      mayType: MapTypes.NORMA,
      zoom: 15,
      center: {
        longitude: 113.309315,
        latitude: 23.13427
      },
      trafficEnabled: false,
      baiduHeatMapEnabled: false,
      markers: [{
        itemId: '13',
        longitude: 113.309315,
        latitude: 23.13427,
        title: "气象局"
      },{
        itemId: 46,
        longitude: 113.313636,
        latitude: 23.135037,
        title: "后勤中心"
      },{
        itemId: 168,
        longitude: 113.309858,
        latitude: 23.132543,
        title: "育才中学"
      }]
    };
  }
  render(){
    return(
      <View style={styles.container}>
        <MapView
          trafficEnabled={this.state.trafficEnabled}
          baiduHeatMapEnabled={this.state.baiduHeatMapEnabled}
          zoom={this.state.zoom}
          mapType={this.state.mapType}
          center={this.state.center}
          markers={this.state.markers}
          style={styles.map}
          onMarkerClick={(e,b) => {
            console.log(e);
            //console.warn(JSON.stringify(e));
          }}
          onMapClick={(e) => {
            //alert('map click')
          }}
        >
        <View style={ [styles.top, styles.floatView ] }>
          <Text onPress={ ()=>Tool.back()}>back</Text>
        </View>
        <View style={ [styles.bottom, styles.floatView ]}>
          <Text>bottom</Text>
        </View>
        </MapView>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    width: width,
    height: height,
    marginBottom: 16
  },
  floatView: {
    position: 'relative',
    backgroundColor: '#fff',
    width: width - 60,
    height: 50,
    marginLeft: 30,
    marginRight: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {
    marginTop: 30,
  },
  bottom: {
    marginTop: height - 130,
  }
})
