import React, { useEffect, useState } from 'react'

export default function Counter() {
	const [count, setCount] = useState(0)
	const [list,setList]=useState([])
	const [innerWidth,setInnerWidth]=useState(window.innerWidth)
	useEffect(()=>{
		setTimeout(()=>{
			const data=[
				{name:'zhangsan',age:1},
				{name:'lisi',age:10},
				{name:'wangwu',age:20},
			]
			// console.log('data:',data);
			setList(data)
		},3000)
	},[])


		{/* useEffect使用 */}
	useEffect(()=>{
		const changeWidth=()=>{
			setInnerWidth(window.innerWidth)
		}
		window.addEventListener('resize',changeWidth)
		return ()=>window.removeEventListener('resize',changeWidth)
		console.log(1111);
	})

	const add = () => {
		setCount(count + 1)
	}
	const subtration = () => {
		setCount(count-1)
	}
	return (
		<>
			<div>这是一个计数器</div>
			<div>{count}</div>
			<div>
				<button onClick={add}>+</button>
				<button onClick={subtration}>-</button>
				<ul>
					{
						list&&list.map(item=><li>{item.name}--{item.age}</li>)
					}
				</ul>
				
			
				<p>屏幕的宽度为{innerWidth}</p>
			</div>
		</>
	)
}