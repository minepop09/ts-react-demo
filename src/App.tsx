import { useState } from "react";

import Comp1 from "@/components/comp1";
import Comp2 from "@/components/comp2";
import { Button } from "antd";
import Box from "./components/box";

// jsx中可以通过{}识别js的表达式，但不能使用语句


function App() {
  const [count, setCount] = useState(0);

  const message: string = "this a message";
  const list = [
    {id:1001,name:'Vue'},
    {id:1002,name:'React'},
    {id:1003,name:'Angular'},
  ]
  const flag: boolean = true
  const loading: boolean = true
  enum articleTypeEnum{
    None=0,
    One=1,
    Three=3
  }

  function getArticle(articleType: articleTypeEnum):JSX.Element{
    let ret:JSX.Element = <div></div>
    switch(articleType){
      case articleTypeEnum.None:
        ret = <div>我是无图文章</div>;
        break;
      case articleTypeEnum.One:
        ret = <div>我是yi图文章</div>;
        break;
      case articleTypeEnum.Three:
        ret = <div>我是3图文章</div>;
        break;
      default:
        break;
    }
    return ret;
  }

  function getName(): string {
    return "minepop";
  }

  const clickHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>)=>{
    console.log('button按钮被点击了',e)
  }
  const clickHandler1 = (name:string,e: React.MouseEvent<HTMLElement, MouseEvent>)=>{
    console.log('button按钮被点击了',name,e)
  }

  return (
    <div className="App">
      顶级组件
      <Comp1></Comp1>
      <Comp2></Comp2>
      <Button type="primary" onClick={clickHandler}>我的按钮</Button>
      <Button type="primary" onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>)=>clickHandler1('nihao',e)}>我的按钮带参数</Button>
      <p>
        {/* 识别js变量 */}
        {message}
      </p>
      {/* 使用引号传递字符串 */}
      {"this is string"}
      <p>
        {/* 函数调用 */}
        {getName()}
      </p>
      <p>
        {/* 方法调用 */}
        {new Date().getDate()}
      </p>
      <p>
        {/* 使用js对象 */}
        <div style={{color:'red'}}>使用js对象</div>
      </p>
      <hr/>
      {/* 渲染列表，map循环哪个结构，return哪个结构。需要加上独一无二的key（stirng或number） */}
      <ul>
        {list.map(item=><li key={item.id}>{item.name}</li>)}
      </ul>
      {/* 条件渲染，逻辑运算符&&、三元运算符 */}
      <p>
      {flag&&<span>this is a span</span>}
      {loading?<span>loading</span>:<span>this is a span</span>}
      </p>

      {/* 复杂条件渲染，解决方案：自定义函数 + if判断语句 */}
      {getArticle(articleTypeEnum.One)}
      <hr/>
      <Box></Box>
    </div>
    
  );
}

export default App;
