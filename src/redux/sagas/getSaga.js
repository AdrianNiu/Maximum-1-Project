import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getTreeSaga(action) {
    console.log('in getTreeSaga', action.payload);
    try {
        const response = yield axios.get(`/api/tree/${action.payload}`);
        yield put({ type: 'TREE', payload: response.data })
    }
    catch (error) {
        console.log('Error with TREE GET', error);
    }
}

function* getStepSaga(action) {
    console.log('in getStepSaga', action.payload);
    try {
        const response = yield axios.get(`/api/step/${action.payload}`);
        yield put({ type: 'STEP', payload: response.data })
    }
    catch (error) {
        console.log('Error with STEP GET', error);
    }
}


function* getSaga() {
    yield takeLatest('GET_TREE', getTreeSaga);
    yield takeLatest('GET_STEP', getStepSaga);
}

export default getSaga;