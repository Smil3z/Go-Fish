import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* fetchJournal() {
    try {
        const journal = yield axios.get('/api/journal');
        console.log('get all:', journal.data);
        yield put({ type: 'SET_JOURNAL', payload: journal.data});
    } catch (error) {
        console.log('error in fetchJournal function', error);
    }
}

function* journalSaga() {
    yield takeLatest('FETCH_JOURNAL',fetchJournal);
}

export default journalSaga;