import React,{Component} from 'react'
import {Provider,connect}  from  'react-redux'
import store from './store'
import Counter  from './page/Counter'

class  Container  extends  Component{
	render(){
		return(
			<Provider store={store}>
				<Counter/>
			</Provider>
		)
	}
}

export default  Container 

