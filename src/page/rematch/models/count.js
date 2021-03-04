export default {
    namespace:'count',
	state: {
		value:0,
		max:10,
		min:0,
	},
	reducers: {
		increment(state, payload) {
			return  {...state,value:state.value+1}
		},
		
		substr(state){
			return  {...state,value:state.value-1}
		}
	},
	effects: {
		async incrementAsync(payload, rootState) {
			await new Promise(resolve => setTimeout(resolve, 3000))
			this.increment()
		}
		// dispatch({type:'count/incrementAsync',payload:1})
		// dispatch.count.incrementAsync(1)
	}
}


