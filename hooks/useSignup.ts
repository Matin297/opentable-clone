import { useState } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

import { User } from "@/utils/prisma";
import { useAuthContext } from "@/contexts/auth";
import { REQUEST_STATUS, StatusType } from "@/utils/constants";

type Error = {
  message?: string;
  password?: string;
  email?: string;
  phone?: string;
  city?: string;
  first_name?: string;
  last_name?: string;
};

type SignupState = {
  status: StatusType;
  error: Error | null;
};

function useSignup() {
  const [state, setState] = useState<SignupState>({
    status: REQUEST_STATUS.idle,
    error: null,
  });

  const [, setAuth] = useAuthContext();

  function signup(formData: FormData) {
    setState((prev) => ({
      ...prev,
      status: REQUEST_STATUS.loading,
    }));

    return axios.post("/api/signup", formData).then(
      (response: AxiosResponse<User>) => {
        setState((prev) => ({
          ...prev,
          status: REQUEST_STATUS.success,
        }));
        setAuth(response.data);
      },
      (error: AxiosError<Error>) => {
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
    signup,
    isIdle: state.status === REQUEST_STATUS.idle,
    isLoading: state.status === REQUEST_STATUS.loading,
    isSuccess: state.status === REQUEST_STATUS.success,
    isFailed: state.status === REQUEST_STATUS.fail,
  };
}

export default useSignup;
