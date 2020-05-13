import React, { Component } from 'react'
import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchNews() {
    const json = yield fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json(), );
        yield put({ type: "NEWS_RECEIVED", data : json});
    
}
function* actionWatcher() {
    yield takeLatest('GET_LIST', fetchNews)
}
export default function* rootSaga() {
    
    yield all([
        actionWatcher(),
    ]);
 }