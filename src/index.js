
import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { icons } from './assets/icons'

import { Provider } from 'react-redux'
import store from './store'

React.icons = icons

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root')
);
serviceWorker.unregister();


/* ------------------------*/
// import 'react-app-polyfill/ie11'; 
// import 'react-app-polyfill/stable';
// import './polyfill'
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// import { icons } from './assets/icons'
// import { createStore, combineReducers, bindActionCreators } from 'redux';
// import { connect, Provider } from 'react-redux';
// import ResturentReducer from './reducers/resturent.reducers';
// import * as ResturentAction from './actions/resturent.action';
// let data = {};

// React.icons = icons;
// const storeD = createStore(ResturentReducer, data);

// const mapsStateToPropsMeeting = state => ({
//   meetingData: state,
// });

// const mapsDispatchToPropsMeeting = dispatch => ({
//   actions: bindActionCreators(ResturentAction, dispatch),
// });

// const AppComp = connect(mapsStateToPropsMeeting, mapsDispatchToPropsMeeting)(App);


// ReactDOM.render(
//   <Provider store={storeD}>
//     <AppComp />
//   </Provider>, 
//   document.getElementById('root')
// );
// serviceWorker.unregister();




// const mapsStateToPropsAddOkr = state => ({
//   addOkrData: state,
// });

// const mapsDispatchToPropsAddOkr = dispatch => ({
//   actions: bindActionCreators(AddOkrActions, dispatch),
// });


// function renderAddGoalPage(data) {
//   const mountId = document.getElementById('add_goal_page');
//   if (mountId) {
//     const addOkrStore = createStore(AddOkrReducer, data);
//     ReactDOM.render(
//       <Provider store={addOkrStore}>
//         <I18nextProvider i18n={i18n}>
//         <AddOkrAppComp />
//         </I18nextProvider>
//       </Provider>,
//       mountId,
//     );
//   }
// }

// window.renderAddGoalPage = renderAddGoalPage;

