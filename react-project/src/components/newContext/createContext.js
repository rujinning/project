import { createContext } from "react";
//export default只能导出组件(function name,类组件)
//导出变量要用export const = ，引用时需要{}
export const testContext = createContext({
    color: 'green'
});