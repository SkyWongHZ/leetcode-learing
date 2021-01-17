/*
 * @Author: Sky
 * @Date: 2020-12-26 15:10:42
 * @LastEditTime: 2020-12-26 16:24:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-hooks-practice/src/page/hooks/customHooks.js
 */

import { useEffect,useState } from "react"


function useInnerWidth() {
	const [innerWidth,setInnerWidth]=useState(window.innerWidth)
	useEffect(()=>{
		const  resize=()=>{
			setInnerWidth(window.innerWidth)
		}
		window.addEventListener('resize',resize)

	})
	return innerWidth
}

function Page() {
	const value=useInnerWidth()
		
	return(
		<div>{value}</div>
	)
}
export default Page