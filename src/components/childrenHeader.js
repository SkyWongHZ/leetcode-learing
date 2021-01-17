import React ,{PureComponent} from  'react'

export default class Demo extends PureComponent {
	state={
	  count: 0,
	}
	componentWillMount(){
		console.log(`chilren 111`);
	}
	componentDidMount(){
		console.log(`children 222`);
	}
	componentWillReceiveProps(nextProps){
		console.log(`chilren 333`);
	}
	shouldComponentUpdate(nextProps,nextState){
		console.log(`chilren 444`);
		return  true
	}
	componentWillUpdate(){
		console.log(`children 555`);
	}
	componentDidUpdate(){
		console.log(`children 666`);
	}
	
  
	render() {
		console.log(`children 777`);
	  return(
			<>
                {this.props.count}
			</>
		)
	}
  }