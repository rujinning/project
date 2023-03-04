import { Component } from "react";
import { testContext } from "./createContext";
export default class sonContext extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <testContext.Consumer>
                {
                    (value) => (
                        <div>
                            <p>这是孙子组件</p>
                            {value.color}
                        </div>
                    )
                }
            </testContext.Consumer>
        )
    }
}