import { useState } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

import { User } from "@/utils/prisma";
import { useAuthContext } from "@/contexts/auth";
import { REQUEST_STATUS, StatusType } from "@/utils/constants";

type Error = {
  message?: string;
  password?: string;
  email?: string;
};

type SignInState = {
  status: StatusType;
  error: Error | null;
};

function useSignin() {
  const [state, setState] = useState<SignInState>({
    status: REQUEST_STATUS.idle,
    error: null,
  });

  const [, setAuth] = useAuthContext();

  function signin(formData: FormData) {
    setState((prev) => ({
      ...prev,
      status: REQUEST_STATUS.loading,
    }));

    return axios.post("/api/signin", formData).then(
      (response: AxiosResponse<User>) => {
        setState((prev) => ({
          ...prev,
          status: REQUEST_STATUS.success,
        }));
        console.log(response.data);
        setAuth(response.data);
      },
      (error: AxiosError<Error>) => {
        console.log(error);
        setState((prev) => ({
          ...prev,
          error: error.response?.data || null,
          status: REQUEST_STATUS.fail,
        }));
        return Promise.reject(error);
      }
    );
  }

  return {
    ...state,
    signin,
    isIdle: state.status === REQUEST_STATUS.idle,
    isLoading: state.status === REQUEST_STATUS.loading,
    isSuccess: state.status === REQUEST_STATUS.success,
    isFailed: state.status === REQUEST_STATUS.fail,
  };
}

export default useSignin;
