import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* fetchAddingFish(action) {
    try {
        const add = yield axios.get(`/api/adding/${action.payload}`);
        console.log(' Adding all fields:', add.data);
        yield put({ type: 'SET_ADD', payload: add.data});
    } catch (error) {
        console.log('error in fetchJournal function', error);
    }
}

function* addSaga() {
    yield takeLatest('FETCH_ADD',fetchAddingFish);
}

export default addSaga;