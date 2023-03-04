import { Component } from "react";
import ControllredComponent from './controllredComponent';
import UnControllredComponent from './uncontrollredComponent';
class Interview extends Component {
    render() {
        return (
            <div>
                <ControllredComponent />
                <UnControllredComponent />
            </div>
        )
    }
}
export default Interview;