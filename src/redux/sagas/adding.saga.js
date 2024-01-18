import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* sendFishToServer(action) {
    try {
        yield axios.post(`/api/adding`, action.payload);
    } catch (error) {
        console.log('error in fetchJournal function', error);
    }
}

function* addSaga() {
    yield takeLatest('SEND_FISH_TO_SERVER',sendFishToServer);
}

export default addSaga;