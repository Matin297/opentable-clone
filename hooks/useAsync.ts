import { useReducer, useCallback } from "react";
import { AxiosResponse, AxiosError } from "axios";

import { REQUEST_STATUS, StatusType } from "@/utils/constants";

type StateType<D, E> = {
  status: StatusType;
  error: E | null;
  data: D | null;
};

const DEFAULT_INIT_STATE = {
  status: REQUEST_STATUS.idle,
  error: null,
  data: null,
};

function useAsync<D, E>(initialState: Partial<StateType<D, E>> = {}) {
  const [state, setState] = useReducer<
    (s: StateType<D, E>, p: Partial<StateType<D, E>>) => StateType<D, E>
  >((prevState, payload) => ({ ...prevState, ...payload }), {
    ...DEFAULT_INIT_STATE,
    ...initialState,
  });

  const run = useCallback((promise: Promise<AxiosResponse<D>>) => {
    if (!promise || !promise.then) {
      throw new Error(
        `The argument passed to useAsync().run must be a promise.`
      );
    }

    setState({ status: REQUEST_STATUS.loading });
    return promise.then(
      (response) => {
        setState({ data: response.data, status: REQUEST_STATUS.success });
        return response.data;
      },
      (error: AxiosError<E>) => {
        setState({
          error: error.response?.data,
          status: REQUEST_STATUS.fail,
        });
        throw Promise.reject(error);
      }
    );
  }, []);

  return {
    run,
    ...state,
    isIdle: state.status === REQUEST_STATUS.idle,
    isLoading: state.status === REQUEST_STATUS.loading,
    isSuccess: state.status === REQUEST_STATUS.success,
    isFailed: state.status === REQUEST_STATUS.fail,
  };
}

export default useAsync;
