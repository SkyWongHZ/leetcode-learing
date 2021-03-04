export default {
	namespace: 'mirror',
	state: {
		value: 0,
		max: 10,
		min: 0,
		starCount:0.
	},
	reducers: {
		// reset(state, payload) {
		// 	console.log('stateXXX', state,payload);
		// 	return { ...state,...payload }
		// },
		
		updateData(state, payload) {
			console.log('stateXXX', state,payload);
			return { ...state,...payload }
		}

	},
	effects: {
		async getStarCount(payload, rootState) {
			const res = await fetch('https://api.github.com/repos/facebook/react')
			console.log('res:', res);
			const json = await res.json()
			const starCount=json.stargazers_count

			
			// return {...state,starCount:starCount}
			this.updateData({starCount})
		}
		// dispatch({type:'mirror/incrementAsync',payload:1})
		// dispatch.count.incrementAsync(1)
	}
}





