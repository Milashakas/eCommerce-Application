/* eslint-disable no-param-reassign */
import { IAction, IState } from "../interfaces/IRedux";

const rootReducer = (state: IState, action: IAction): IState => {
  if (action.type === "__INIT__") {
    return state;
  }
  return state;
};

export default rootReducer;
