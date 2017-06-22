import React, { Component } from 'react';

import StorageUtil from './utils/storage-util';
import Guide from './containers/guide';
import AppRoute from './route/route';
import config from './utils/config';

export default class Index extends Component {
	constructor(props){
		super(props);
		this.state = {
			firstTime: false
		}
	}
	componentWillMount(){
		let me = this;
		//me.setState({firstTime: true});
		StorageUtil.load('version',(ret)=>{
			if(ret != config.version){
				me.setState({firstTime: true});
			}
			StorageUtil.save('version',config.version);
		})
	}
	render(){
		let { firstTime } = this.state;
		if(firstTime)
			return <Guide callback = { ()=>{ this.setState({firstTime:false})} }/>
		else
			return <AppRoute/>
	}
}
