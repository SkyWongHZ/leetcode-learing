import React, { Fragment, useState, useMemo } from 'react'

function useMemoDemo() {
	const [count, setCount] = useState(0)
	const [value,setValue]=useState('')
	const meno = useMemo(() => <ChildrenCounter count={count}/>, [count])
	return (
		<Fragment>
			<div>
				<p>{count}</p>
				<button onClick={() => setCount(count + 1)}>+</button>
				<input value={value} onChange={e=>setValue(e.target.value)}/>
				{meno}
			</div>
		</Fragment>
	)
}

function ChildrenCounter(props) {
	console.log('children  render');
	return (
		<div>
			<p>usemeno hooks</p>
			<p>children count:{props.count}</p>
		</div>
	)
}

export default useMemoDemo