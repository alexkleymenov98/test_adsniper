import {takeLatest, put, call, takeEvery} from 'redux-saga/effects';
import {GET_ALL_USER_PAGE, GET_LOGINS, GET_USER_PAGE_BY_ID, GetUserPageById} from "../types/constans";
import {hideLoader, requestLogin, requestUserPage, showLoader} from "../actions/actions";
import genFetchData  from "../utils/genFetchData";
import {ActionType, TAPIlistUsersResp, TAPIUsersPage, TPUsersPageById} from "../types/general";

export function* sagaWatcher(){
    yield takeEvery(GET_LOGINS, sagaLogin);
    yield takeLatest(GET_ALL_USER_PAGE, sagaAllUserPage);
    yield takeLatest(GET_USER_PAGE_BY_ID, sagaUserPageById);
}
const APIGetListUsers = genFetchData<TAPIlistUsersResp>('http://localhost:4000/users.logins');
const APIGetAllUsersPage = genFetchData<TAPIUsersPage>('http://localhost:4000/users.page');
const APIGetUsersPageById = genFetchData<TAPIUsersPage, TPUsersPageById>('http://localhost:4000/users.page');

function* sagaLogin(){
    yield put(showLoader());
    const res = yield call(APIGetListUsers);
    yield put(requestLogin(res));
    yield put(hideLoader());
}
function* sagaAllUserPage(){
    yield put(showLoader());
    const res = yield call(APIGetAllUsersPage);
    yield put(requestUserPage(res));
    yield put(hideLoader());
}
function* sagaUserPageById(action: ActionType<GetUserPageById,TPUsersPageById>){
    yield put(showLoader());
    const res = yield call(APIGetUsersPageById,{id:action.payload});
    yield put(requestUserPage(res));
    yield put(hideLoader());
}



