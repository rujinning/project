import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionType from '../actions/actionTypes';
import {
    postOrderTag as postOrderTagApi,
    keepAlive as keepAliveApi,
    putApproval as putApprovalApi,
    deleteData as deleteDataApi
} from '../services';
function* postOrderTag(action) {
    // post
    try {
        yield put({ type: actionType.IS_LOADING, isloading: { confimOrder: true } });
        const results = yield call(postOrderTagApi, action.params);
        yield put({ type: actionType.UPDATE_POSTORDERTAG, responsePostOrderTag: results });
    } catch (error) {
        console.log(error);
        yield put({
            type: actionType.API_ERROR,
            isAPIERROR: true
        })
    } finally {
        yield put({ type: actionType.IS_LOADING, isloading: { confimOrder: false } });
    }
}
function* keepAlive() {
    // get
    try {
        yield put({ type: actionType.IS_LOADING, isloading: { keepAlive: true } });
        const results = yield call(keepAliveApi);
        yield put({ type: actionType.UPDATE_CURRENT_TIME, responseKeepAlive: results })
    } catch (error) {
        yield put({
            type: actionType.API_ERROR,
            isAPIERROR: true
        })
    }
    finally {
        yield put({ type: actionType.IS_LOADING, isloading: { keepAlive: false } });
    }
}
function* putApproval(action) {
    try {
        yield put({ type: actionType.IS_LOADING, isloading: { putApproval: true } });
        const results = yield call(putApprovalApi, action.body);
        yield put({ type: actionType.UPDATE_PUTAPPROVAL, responsePutApproval: results })
    } catch (error) {
        yield put({
            type: actionType.API_ERROR,
            isAPIERROR: true
        })
    }
    finally {
        yield put({ type: actionType.IS_LOADING, isloading: { putApproval: false } });
    }
}
function* deleteData(action) {
    try {
        yield put({ type: actionType.IS_LOADING, isloading: { deleteData: true } });
        const results = yield call(deleteDataApi, action.request);
        yield put({ type: actionType.UPDATE_DELETEDATA, responseDeleteData: results })
    } catch (error) {
        yield put({
            type: actionType.API_ERROR,
            isAPIERROR: true
        })
    }
    finally {
        yield put({ type: actionType.IS_LOADING, isloading: { deleteData: false } });
    }
}
export default function* account() {
    yield [
        takeEvery(actionType.POSTORDERTAG, postOrderTag),
        takeEvery(actionType.KEEPALIVE, keepAlive),
        takeEvery(actionType.PUTAPPROVAL, putApproval),
        takeEvery(actionType.DELETEDATA, deleteData)
    ];
}
