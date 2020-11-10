import {
    GET_ALL_USER_PAGE,
    GET_LOGINS,
    GET_USER_PAGE_BY_ID,
    HIDE_LOADING,
    REQUEST_LOGIN,
    REQUEST_USER_PAGE,
    SHOW_LOADING,
} from "../types/constans";
import {TAPIlistUsersResp, TAPIUsersPage, TPUsersPageById} from "../types/general";

export const getLogins = ()=> ({type: GET_LOGINS});
export const getAllUserPage = ()=> ({type: GET_ALL_USER_PAGE});
export const getUserPageById = (payload: TPUsersPageById)=> ({type: GET_USER_PAGE_BY_ID, payload: payload});

export const requestLogin = (payload:TAPIlistUsersResp)=> ({type: REQUEST_LOGIN, payload: payload});
export const requestUserPage = (payload:TAPIUsersPage)=> ({type: REQUEST_USER_PAGE, payload: payload});

export const showLoader = ()=> ({type: SHOW_LOADING});
export const hideLoader= ()=> ({type: HIDE_LOADING});