import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* fetchDetails(action) {
    try {
        yield axios.post('/api/details', action.payload);
        console.log('get all:', details.data);
        //yield put({ type: 'SET_DETAILS', payload: details.data});
    } catch (error) {
        console.log('error in fetchDetails function', error);
    }
}

function* detailsSaga() {
    yield takeLatest('FETCH_DETAILS',fetchDetails);
}

export default detailsSaga;