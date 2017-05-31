import React, { Component } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { AppRegistry } from 'react-native';

export default class Loading extends Component{
  constructor(props){
    super(props);
    this.state = {
      visible:false
    }
  }
  show(){
    this.setState({
      visible:true
    })
  }
  hide(){
    this.setState({
      visible:fale
    })
  }
  render(){
    return (<Spinner
              visible={this.props.visible}
              textContent={"数据加载中..."}
              textStyle={{color: '#FFF',fontSize:12}} />)
  }
}
