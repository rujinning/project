import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'whatwg-fetch';
// import moment from 'moment-timezone';
// 可以在constructor(){moment.locale('en')},设置语言
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { Router } from 'react-router';
// import { supportHistory } from 'history/lib/DOMUtils'
// import { BrowserRouter } from 'react-router';
// import { BrowserRouter } from 'react-router-dom'
// import { syncHistoryWithStore } from 'react-router-redux';
// import configureStore from './store';
// import createRoutes from './routes';
// import { createBrowserHistory } from 'history';
// import { addLocaleData } from 'react-intl';
// import zh from 'react-intl/locale-data/zh';
// import en from 'react-intl/locale-data/en';
// import { IntlProvider } from 'react-intl';
// import Locale from './locale';
// reset.css
// import { BrowserRouter } from 'react-router-dom';
// function handRouterUpdate() {
//   window.scrollTo(0, 0);
// }

// function runApp() {
//   const target = document.getElementById('root');
//   const initialState = {};
//   const historyStrategy = createBrowserHistory();
//   const store = configureStore(initialState, historyStrategy);
//   const history = syncHistoryWithStore(historyStrategy, store);
//   const app = (
//     <Provider store={store}>
//       <IntlProvider locale='en' messages={Locale.en}>
//         <Router history={history} routes={createRoutes(store)} onUpdate={handRouterUpdate} />
//       </IntlProvider>
//     </Provider>
//   );
//   render(app, target);
// }
// runApp();
// const target = document.getElementById('root');
// if (!global.Intl) {
//   require.ensure([
//     'intl'
//   ], (require) => {
//     require('intl');
//     runApp();
//   })
// } else {
//   runApp();
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
