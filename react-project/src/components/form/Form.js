import { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.myFunction = this.myFunction.bind(this);
        this.sumbitForm = this.sumbitForm.bind(this);
    }
    myFunction() {
        alert('表单已清除');
        console.log('123', this.props);
    }
    sumbitForm() {
        alert('提交');
    }
    componentDidMount() {
        // onInvalid
        // onReset
        // onSubmit
    }
    render() {
        return (
            <div>
                <form action="/jc_script/action.php" method="get" onSubmit={this.sumbitForm}>
                    名称:<input type="text" onInvalid={this.myFunction} name="fname" required />
                    <input type="submit" value="提交 " />
                </form>
                <form onReset={this.myFunction}>
                    姓名: <input type="text" />
                    <input type="reset" value="重置" />
                </form>
            </div>
        )
    }
}
export default Form;