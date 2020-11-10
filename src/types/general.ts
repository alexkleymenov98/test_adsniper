export interface Login {
    id: number,
    login: string;
}
export type TAPIlistUsersResp = Login[];

export interface Page extends Login{
    usrId: number ;
    date: number;
    page: string;
}
export type TAPIUsersPage = Page[];

export type ActionLoading<S> = {
    type: S;
}
export type ActionType<S,T> = ActionLoading<S> & {
    payload: T;
};

export type TPUsersPageById = Number