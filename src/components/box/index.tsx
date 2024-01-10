
import styles from './box.module.scss'

import { useState } from 'react'
function Box(){
    // count 状态变量
    // setCount 修改状态变量的方法
    const [count,setCount] = useState(0)

    return (
        <div className={styles.box}>
            <p>这里是box的内容</p>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
            <p>{count}</p>
        </div>
    )
}
export default Box