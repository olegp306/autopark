import { call, put } from 'redux-saga/effects'

import { isUpdating, updated, updateFailed, isAdding, added, addingFailed } from './actions'
import api from '../../api'


export function * updateBusSaga(action) {
    yield put(isUpdating())

    try {
        const response = yield call(api.updateBusStatus, action.payload)
        yield put(updated())
    }
    catch(error) {
        yield put(updateFailed(error))
    }
}

export function * addBusSaga(action) {
    yield put(isAdding())

    try {
        const response = yield call(api.addBus, action.payload)
        yield put(added())
    }
    catch(error) {
        yield put(addingFailed(error))
    }
}
