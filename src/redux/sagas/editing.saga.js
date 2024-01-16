import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* fetchEditingDetails(action) {
    try{
    const edit = yield axios.get(`/api/editing/${action.payload}`);
    yield put ({type:'SET_EDIT', payload: edit.data});
    } catch(error) {
      console.log('error with details saga', error);
    }
  }

function* editSaga() {
    yield takeLatest('FETCH_EDIT', fetchEditingDetails);
}

export default editSaga;