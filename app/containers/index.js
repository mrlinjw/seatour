import React, { Component } from 'react';
import {
  StyleSheet,
  ToastAndroid,
  Text,
  Alert,
  Button,
  ScrollView,
  View
} from 'react-native';

import Tabs from 'react-native-tabs';

import First from './first';
import ListView from './listview';

import {Actions} from 'react-native-router-flux'

export default class Index extends Component {
		constructor(props){
				super(props);
        this.state = {page:1};
		}
		componentDidMount(){

		}
		onButtonPress(){
				Actions.listview()
		}
	  render() {
       var self = this
            container_view = <Text>page</Text>;
      switch (this.state.page) {
        case 1:
          container_view = <First/>;
          break;
        case 2:
          container_view = <ListView/>;
          break;
        default:
          container_view = <Text>other page+{this.state.page}</Text>;
      }
	    return (
        <View style={styles.container}>
          <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
                selectedStyle={{color:'#00CFFF'}}
                selectedIconStyle={{borderBottomWidth:2,borderBottomColor:'#00CFFF'}}
                onSelect={el=>this.setState({page:el.props.name})}>
              <Text name={1}>找线路</Text>
              <Text name={2}>找船舶</Text>
              <Text name={3}>我的</Text>
              <Text name={4}>关于我们</Text>
          </Tabs>
            <View style={styles.container_view}>
              {container_view}
            </View>
        </View>
	    );
	  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container_view:{
    flex:1,
    marginBottom: 50,
    backgroundColor:"#F5FCFF"
  },
});
