export interface IRegister {}
export interface IPosts {}
export interface IAuth {
  username: string;
  password: string;
  access: string;
  refresh: string;
}

export interface IUser {
  id: string;
  username: string;
}

export interface IRegisterState extends IUser {
  isAuth: boolean;
  user: IUser | null;
  error: string | null;
}

