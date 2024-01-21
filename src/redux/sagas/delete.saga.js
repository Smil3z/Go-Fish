import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* deleteFish(action){
    try {
        yield axios.delete(`/api/delete/${action.payload}`);
        yield put({type: 'DELETE_DETAILS'});
    } catch(error){
        console.log('error in DELETE saga', error);
        alert('Something went wrong');
    };
};

function* deleteSaga() {
    yield takeLatest('DELETE_FISH', deleteFish);
}

export default deleteSaga;