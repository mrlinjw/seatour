import React, { Component } from 'react';

import StorageUtil from './utils/storage-util';
import Guide from './containers/guide';
import AppRoute from './route/route'

export default class Index extends Component {
	constructor(props){
		super(props);
		this.state = {
			firstTime: false
		}
	}
	componentWillMount(){
		let me = this;
		me.setState({firstTime: true});
		// StorageUtil.load('firstTime',(ret)=>{
		// 	if(ret===null || ret==='undefined'){
		// 		StorageUtil.save('firstTime',false);
		// 		me.setState({firstTime: true});
		// 	}
		// 	else
		// 		StorageUtil.save('firstTime',false);
		// })
	}
	render(){
		let { firstTime } = this.state;
		if(firstTime)
			return <Guide callback = { ()=>{ this.setState({firstTime:false})} }/>
		else
			return <AppRoute/>
	}
}
