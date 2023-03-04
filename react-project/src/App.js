// import logo from './logo.svg';
import './App.css';
import './App.scss';
import { Component } from 'react';
// import common from './lib/common';
// import shortid from 'shortid';
import Form from './components/form/Form';
import Hook from './components/Hook/base'
import LifeCycle from './components/react/LifeCycle';
import PropTypes from 'prop-types';
import NewContext from './components/newContext';
import Hoc from './components/Hoc/children';
import Interview from './components/interview/interview';
import commonFunc from './components/common'
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: '123',
      color: 'red'
    };

    this.createMarkup = this.createMarkup.bind(this);
  }
  static childContextTypes = {
    color: PropTypes.string,
    callback: PropTypes.func
  }
  getChildContext() {
    return {
      color: this.state.color,
      callback: this.callback.bind(this)
    }
  }
  callback() {
    console.log('context', this.props);
    this.setState({
      color: 'pink'
    });
  }
  componentDidMount() {
    // //数组长度不一致时，返回1 的情况
    // const result1 = common.compareVersion('11.11.9', '11.11');
    // //数组长度不一致时，返回-1的情况
    // const result2 = common.compareVersion('11.11', '11.11.45');
    // //数组长度不一致时，返回0的情况
    // const result3 = common.compareVersion('11.01', '11.1.0');
    // //正常情况下返回1
    // const result4 = common.compareVersion('1.1.8', '1.1.6');
    // //正常情况下返回-1
    // const result5 = common.compareVersion('1.1.0', '1.1.1');
    // console.log('result', result1, result2, result3, result4, result5);
    // const newArr = common.removeRepet(['2', 'b', '2121', 'z', '523', 'w', '9', 'a', '7', '3', '4', 'b', '6', '4', '80']);
    // const url = "https://alibaba.com?a=1&b=2&c=846123129999999999999999##/abc/def?a=2&b=3&c=4";
    // const url1 = "https://alibaba.com#/abc/def?a=1&b=112454&c=666";
    // const url2 = "https://alibaba.com";
    // const result = common.getParamFromURL(url, 'c')
    // const result1 = common.getParamFromURL(url1, 'b')
    // const result2 = common.getParamFromURL(url2, 'b')
    // console.log('newArr', newArr);
    // console.log('123', result, result1, result2, shortid.generate());
    console.log('666', commonFunc);
    commonFunc.closure();

  }
  createMarkup() {
    return { __html: 'First &middot; Second' };
  }
  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={this.createMarkup()} />
        <Form />
        <Hook id='123' />
        <LifeCycle id='12364565' />
        <NewContext />
        <Hoc />
        <Interview />
      </div>
    )
  }
}
export default App;
