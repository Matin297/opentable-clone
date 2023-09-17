import { useState } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import { User } from "@/utils/prisma";

const REQUEST_STATUS = {
  idle: "idle",
  loading: "loading",
  success: "success",
  fail: "fail",
} as const;

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
  status: keyof typeof REQUEST_STATUS;
  data: User | null;
  error: Error | null;
};

function useSignup() {
  const [state, setState] = useState<SignupState>({
    status: REQUEST_STATUS.idle,
    data: null,
    error: null,
  });

  function signup(formData: FormData) {
    setState((prev) => ({
      ...prev,
      status: REQUEST_STATUS.loading,
    }));

    return axios.post("/api/signup", formData).then(
      (response: AxiosResponse<User>) => {
        setState((prev) => ({
          ...prev,
          data: response.data,
          status: REQUEST_STATUS.success,
        }));
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
