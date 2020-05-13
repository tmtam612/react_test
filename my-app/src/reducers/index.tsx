import React, { Component } from 'react'
import  {action, actionSave} from '../actions';
import sagas from '../sagas';
import { createStore } from 'redux'


const reducer = (initState: object = {}, actions: { type: string; data: any }): object => {
    switch (actions.type) {
        case 'GET_LIST':
            return {...initState, data: actions.data, loading: true};
        case 'NEWS_RECEIVED':
            return {...initState, news: actions.data, loading: false};
        case 'SAVE_DATA':
            
            return {...initState, data: actions.data, loading: true};
        default:
            return {...initState, loading: true};
    }
};
const store = createStore(reducer, ['SAVE_DATA']);
console.log(store.getState())
export default reducer;