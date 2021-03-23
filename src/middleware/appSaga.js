import { call, put, takeLatest } from 'redux-saga/effects';
// import * as httpmodel from '../service/httpmodel'; -- This is an helper methods for all the http request
/**
 * Hee in this file we can have the listener from which we can perform any operation which is needed
 * while app initialize, for any axios call and so on and also we can dispatch the action too once job is done.
 */

export default function* rootSaga() {
    try{
        // yield takeLatest('IS_PLAY', playPauseMusic); -- as like this we can listen for the actions and call the func
    }catch(err){
        console.error('Error in rootSaga ', err.stack);
    }
}
