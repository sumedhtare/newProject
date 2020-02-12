/**
 * @format
 */
import React,{Component} from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { createStore } from 'redux';
import { Provider } from 'react-redux';



const App2 = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

const initialState = {
    data: '123',
};


function reducer(state = initialState, action) {
    console.log('reducer', state, action);
    switch (action.type) {
        case 'Data':
            return {
                data: action.data
            }
            default:
                return state;
    }
}

const store = createStore(reducer);
AppRegistry.registerComponent(appName, () => App2);
console.disableYellowBox = true