import { useState } from 'react'

import Comp1 from '@/components/comp1'
import Comp2 from  '@/components/comp2'
import {Button} from 'antd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      顶级组件
      <Comp1></Comp1>
      <Comp2></Comp2>
      <Button type='primary'>我的按钮</Button>
    </div>
  )
}

export default App
