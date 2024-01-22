import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* fetchEditingDetails(action) {
    try{
    yield axios.put(`/api/edit/${action.payload.id}`, action.payload);
    yield put ({type:'FETCH_DETAILS', payload: action.payload.id});
    } catch(error) {
      console.log('error with details saga', error);
    }
  }

function* editSaga() {
    yield takeLatest('EDIT_DETAILS', fetchEditingDetails);
}

export default editSaga;