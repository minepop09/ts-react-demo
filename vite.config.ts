/*
 * @Author: LxzLLL
 * @Date: 2024-01-01 10:39:11
 * @LastEditors: LxzLLL
 * @LastEditTime: 2024-01-06 18:00:51
 * @FilePath: \ts-react-demo\vite.config.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by 珠海虎眸创新科技有限公司, All Rights Reserved. 
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 增加路径别名，@-->./src , 需要npm i -D @types/node（有node环境但无类型声明会导致path报错）
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"./src")
    }
  }
})
