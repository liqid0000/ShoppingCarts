import { all, call } from 'redux-saga/effects';
import formEventSaga from './shoppingStuff';

function* watchAll() {
  yield all([
    call(formEventSaga),  
  ]);
}

export default watchAll;