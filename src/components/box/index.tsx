/*
 * @Author: LxzLLL
 * @Date: 2024-01-10 21:22:21
 * @LastEditors: LxzLLL
 * @LastEditTime: 2024-01-10 22:54:26
 * @FilePath: \ts-react-demo\src\components\box\index.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by 珠海虎眸创新科技有限公司, All Rights Reserved. 
 */

import { Button } from "antd";
import styles from './box.module.scss'

import { useState } from 'react'
import _ from 'lodash'
import classNames from "classnames";

function Box(){
    // count 状态变量
    // setCount 修改状态变量的方法
    const [count,setCount] = useState(0)

    const [form, setForm] = useState({name:'minepop'})
    const changeForm = ()=>{
        setForm({
            ...form,
            name: 'lxzlll'
        })
    }

    const[list, setList] = useState([1,20,15,22,13,16])
    const[idx, setIdx] = useState(0)

    return (
        <div className={styles.box}>
            <p>这里是box的内容</p>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
            <p>{count}</p>

            <p>useState对象变量</p>
            <Button onClick={changeForm} type="primary">修改form的值{form.name}</Button>
            <hr/>
            <p>
                <div>
                    <Button type="primary" onClick={()=>setList(_.sortBy(list))}>升序排序</Button>
                    <Button type="primary" onClick={()=>setList(_.sortBy(list,(num: number)=> -num))}>降序排序</Button>
                </div>
                
                {list.map(
                    (item: number, index: number)=>
                    <span className={classNames(styles.testClass, {[styles.testFontStyle]:idx===index})} onClick={()=>setIdx(index)}>
                        {item}&nbsp;
                    </span>
                )}
            </p>
        </div>
    )
}
export default Box