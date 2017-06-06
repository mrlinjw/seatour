import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
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
      let { page } = this.state,
          self = this,
          container_view = <Text>page</Text>;
      switch (page) {
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
          <Tabs selected={this.state.page}
                style={{backgroundColor:'white'}}
                onSelect={el=>this.setState({page:el.props.name})}>
              <View name={1}>
                <Image
                  source={{uri:"https://haiyuexing.oss-cn-shenzhen.aliyuncs.com/pub/attachment/2017/05/08/152b32f8b54242a49e06ed7a4291b78b.jpg"}}
                  style={ [styles.imagieIco, page==1 && styles.activeIco ] }/>
                <Text
                  style={ [styles.text, page==1 && styles.activeText ] }>
                  找线路
                </Text>
              </View>
              <View name={2}>
                <Image
                  source={{uri:"https://haiyuexing.oss-cn-shenzhen.aliyuncs.com/pub/attachment/2017/05/08/152b32f8b54242a49e06ed7a4291b78b.jpg"}}
                  style={ [styles.imagieIco, page==2 && styles.activeIco ] }/>
                <Text
                  style={ [styles.text, page==2 && styles.activeText ] }>
                  找船舶
                </Text>
              </View>
              <View name={3}>
                <Image
                  source={{uri:"https://haiyuexing.oss-cn-shenzhen.aliyuncs.com/pub/attachment/2017/05/08/152b32f8b54242a49e06ed7a4291b78b.jpg"}}
                  style={ [styles.imagieIco, page==3 && styles.activeIco ] }/>
                <Text
                  style={ [styles.text, page==3 && styles.activeText ] }>
                  我的
                </Text>
              </View>
              <View name={4}>
                <Image
                  source={{uri:"https://haiyuexing.oss-cn-shenzhen.aliyuncs.com/pub/attachment/2017/05/08/152b32f8b54242a49e06ed7a4291b78b.jpg"}}
                  style={ [styles.imagieIco, page==4 && styles.activeIco ] }/>
                <Text
                  style={ [styles.text, page==4 && styles.activeText ] }>
                  设置
                </Text>
              </View>
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
  imagieIco: {
    width: 25,
    height: 25,
    marginBottom: 5,
    alignSelf: 'center',
  },
  activeIco:{
    borderRadius:5,
  },
  text: {
    fontSize: 12,
    alignSelf: 'center',
  },
  activeText:{
    color:'#00cfff',
  },
});
