/*
 * @Author: LxzLLL
 * @Date: 2024-01-01 10:39:11
 * @LastEditors: LxzLLL
 * @LastEditTime: 2024-01-09 17:25:21
 * @FilePath: \ts-react-demo\src\main.tsx
 * @Description: 
 * 
 * Copyright (c) 2024 by 珠海虎眸创新科技有限公司, All Rights Reserved. 
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
// 1、初始化样式
import "reset-css"
// 2、UI框架样式
// 3、全局样式
import "@/assets/styles/global.scss"
// 4、组件样式
import App from './App.tsx'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <App/>
)
