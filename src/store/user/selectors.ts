import { RootState } from "../types";

export const selectUserLoading = (state: RootState) => state.user.loading;

export const selectUserRequestError = (state: RootState) => state.user.error;

export const selectToken = (state: RootState) => state.user.token;

export const selectUser = (state: RootState) => state.user;
