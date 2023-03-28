import React, { createContext, useReducer, Dispatch } from "react";
import { IRegisterState, IUser } from "../Interfaces/interfaces";

type AuthAction =
  | { type: "REGISTER_SUCCESS"; payload: IUser }
  | { type: "REGISTER_FAILURE"; payload: string };

export const AuthContext = createContext<{
  state: IRegisterState;
  dispatch: Dispatch<AuthAction>;
}>({
  state: { isAuth: false, user: null, error: null },
  dispatch: () => undefined,
});

const initialState: IRegisterState = {
  isAuth: false,
  user: null,
  error: null,
};

const authReducer = (
  state: IRegisterState,
  action: AuthAction
): IRegisterState => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
      return {
        ...state,
        isAuth: true,
        user: action.payload,
        error: null,
      };
    case "REGISTER_FAILURE":
      return {
        ...state,
        isAuth: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
