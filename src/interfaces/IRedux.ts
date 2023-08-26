interface IAction {
  type: string;
  payload?: string | number | object | [] | boolean | null;
}

interface IState {
  isAuth: boolean;
  isPreloader: boolean;
  catalog: {
    currentPage?: number;
  };
}

export { IAction, IState };
