import { Component } from "react";
import { testContext } from "./createContext";
import ChildrenContext from "./childrenContext";
export default class main extends Component {
    render() {
        let name = '小人头';
        return (
            <div>
                <testContext.Provider value={{ color: 're00000077' }}>
                    <p>父组件定义的值:{name}</p>
                    <ChildrenContext></ChildrenContext>
                </testContext.Provider>
            </div>
        )
    }
}