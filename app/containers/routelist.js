import React, { Component } from 'react';
import { connect } from 'react-redux';
import{
	StyleSheet,
	ListView,
	View,
	TouchableOpacity,
	TextInput,
	Image,
	Text
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import Loading from '../components/loading';
import Tool from '../utils/tool';
import SeaListView from '../components/sea-listview';

import {
	loadList,
	test
}from '../actions/line/list'

class RouteList extends Component{
	constructor(props){
		super(props);
		this.state = {
			loading_visible: false
		}
	}
	componentWillMount(){
		let {
			list,
			params,
			dispatch
		} = this.props;
		if(Tool.isEmpty(list))
			dispatch(loadList(this,list,params));
	}
	componentDidMount() {
			let me = this;
	    Actions.refresh({
	        leftTitle: 'back',
	        onLeft: () => {
	            // TODO 相关操作
	        },
	        onRight: () => {
	            alert('right press')
	        },
					renderTitle:()=>{
						let s = { height: 40, marginTop: 20, width: 200,alignSelf:'center', justifyContent:'center',alignItems:'center', borderWidth:0.5, borderColor:'gray', borderRadius:20};
						return <TextInput
							placeholder='ss' style={s}
							returnKeyType = 'search'
							onChangeText = {(text)=>{
								me.setState({
									text: text
								})
							}}
							onSubmitEditing = {(a,b,c)=>{
								alert(me.state.text)}
							}
						/>
					}
	    });
	}
	loadFirst(){
		let {
			list,
			params,
			dispatch
		} = this.props;
		dispatch(loadList(this,list,params,null,false,true));
	}
	loadMore(callback){
		let {
			list,
			params,
			dispatch
		} = this.props;
		dispatch(loadList(this,list,params,callback,true));
	}
	getRenderRow(data, sectionID, rowID){
		return (
			<TouchableOpacity onPress = {()=>{Tool.to('scan')}}>
				<View style = {styles.cell}>
					<Image source={{uri:"https://haiyuexing.oss-cn-shenzhen.aliyuncs.com/pub/attachment/2017/05/08/152b32f8b54242a49e06ed7a4291b78b.jpg"}} style={{width:60,height:60}}/>
					<Text style = {{height:150}}>{data.name}</Text>
				</View>
			</TouchableOpacity>
		)
	}
	render(){
		return(
			<View style = {{flex:1, backgroundColor:'#eeeeee'}}>
				<Loading  visible={this.state.loading_visible} />
				<SeaListView
					data = {this.props.list}
					paging = {this.props.paging}
					renderRow = { this.getRenderRow.bind(this) }
					loadMore = {this.loadMore.bind(this)}
					loadFirst = {this.loadFirst.bind(this)}
					headerField = 'fromType'
				/>
				</View>
		)
	}
}

const styles = StyleSheet.create({
	cell:{
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		padding: 10,
		borderColor: '#eeeeee',
		borderBottomWidth: 0.5,
		backgroundColor: '#ffffff'
	}
})

export default connect(state =>({
	list: state.line.list.list,
	paging: state.line.list.paging,
	params: state.line.list.params
}))(RouteList)
