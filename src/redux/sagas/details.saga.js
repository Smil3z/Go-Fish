import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* fetchJournalDetails(action) {
    try{
    const details = yield axios.get(`/api/details/${action.payload}`);
    yield put ({type:'SET_JOURNAL_DETAILS', payload: details.data});
    } catch(error) {
      console.log('error with details saga', error);
    }
  }

function* detailsSaga() {
    yield takeLatest('FETCH_DETAILS', fetchJournalDetails);
}

export default detailsSaga;