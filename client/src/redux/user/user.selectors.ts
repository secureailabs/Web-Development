import { IState } from '@redux/root-reducer';

export const selectUser = (state: IState): IState['user'] => state.user;