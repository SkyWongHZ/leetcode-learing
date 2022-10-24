/*
 * @Author: your name
 * @Date: 2020-12-03 17:10:44
 * @LastEditTime: 2020-12-29 21:59:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-hooks-practice/src/App.js
 */
import React, { Component, useState } from 'react'
// import Page  from './page/rematch'
// import Page  from './page/hooks/useReducer'
// import Page  from './page/hooks/useCallback'
// import Page  from './page/hooks/useMemo'
// import Page  from './page/hooks/useRefDemo'
// import Page  from './page/hooks/lifeCycle'
// import Page  from './page/hooks/customHooks'
// import Page  from './page/HOC/containerA'
// import Page  from './page/HOC/letterReverse'
// import Page  from './page/HOC/containerC'
// import Page  from './page/HOC/avoidUpdate'

// import Page  from './page/react/debounce'
// import Page  from './page/react/throttle'

import Page  from './page/react/react-hooks/demo1'

console.log('test');

export default  ()=> {
  const [text, setText] = useState(0)
  return (
    <div>
      <Page/>
    </div>
  )
}

