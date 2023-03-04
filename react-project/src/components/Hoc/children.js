import { Component } from "react";
import ReverHOC from "./reverseInherit";
class ChildComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 99999 }
    }
    componentDidMount() {
        console.log("演示 反向继承 子组件 mount");
    }
    // 点击事件
    clickComponent() {
        console.log("组件被点了");
    }
    // 反向继承: 通过创建新组件继承自原始组件, 把原始组件作为父组件
    //功能: 可实现对原始组件的state状态数据更新 和 组件模板更新
    render() {
        console.log('his.state', this.state);
        return (
            <div>{this.state.count}</div>
        )
    }
}
export default ReverHOC(ChildComponent);