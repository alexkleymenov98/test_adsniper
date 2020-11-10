import {ActionLoading, ActionType, TAPIlistUsersResp, TAPIUsersPage, TPUsersPageById} from "../types/general";
import {
    HIDE_LOADING,
    HideLoading,
    REQUEST_LOGIN,
    RequestLogin,
    SHOW_LOADING,
    ShowLoading,
    REQUEST_USER_PAGE,
    RequestUserPage, GetUserPageById
} from "../types/constans";

const defaultState = {
    userLogin: [] as TAPIlistUsersResp,
    userPage: [] as TAPIUsersPage,
    loading: false,
}

type ActionGeneral = ActionLoading<ShowLoading>
    | ActionLoading<HideLoading>
    | ActionType<RequestLogin, TAPIlistUsersResp>
    | ActionType<RequestUserPage, TAPIUsersPage>
    | ActionType<GetUserPageById, TPUsersPageById>

export default function Reducer(state = defaultState, action:ActionGeneral):StateType{
    switch (action.type){
        case SHOW_LOADING: {
            return {...state, loading: true}
        }
        case HIDE_LOADING: {
            return {...state, loading: false}
        }
        case REQUEST_LOGIN: {
            return {...state, userLogin: action.payload}
        }
        case REQUEST_USER_PAGE: {
            return {...state, userPage: action.payload}
        }
        default:
            return state;
    }
}
export type StateType = typeof defaultState;
export type State  = ReturnType<typeof Reducer>