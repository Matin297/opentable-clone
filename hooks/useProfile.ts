import { useState, useCallback } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import { getCookie, deleteCookie } from "cookies-next";

import { User } from "@/utils/prisma";
import { REQUEST_STATUS, StatusType, AUTH_COOKIE } from "@/utils/constants";

type Error = {
  message?: string;
};

type SignupState = {
  status: StatusType;
  error: Error | null;
};

function useProfile() {
  const [state, setState] = useState<SignupState>({
    status: REQUEST_STATUS.idle,
    error: null,
  });

  const getProfile = useCallback(() => {
    setState((prev) => ({
      ...prev,
      status: REQUEST_STATUS.loading,
    }));

    return axios
      .get("/api/profile", {
        headers: {
          Authorization: `bearer ${getCookie(AUTH_COOKIE)}`,
        },
      })
      .then(
        (response: AxiosResponse<User>) => {
          setState((prev) => ({
            ...prev,
            status: REQUEST_STATUS.success,
          }));
          return response.data;
        },
        (error: AxiosError<Error>) => {
          deleteCookie(AUTH_COOKIE);
          setState((prev) => ({
            ...prev,
            error: error.response?.data || null,
            status: REQUEST_STATUS.fail,
          }));
          return Promise.reject(error);
        }
      );
  }, []);

  return {
    ...state,
    getProfile,
    isIdle: state.status === REQUEST_STATUS.idle,
    isLoading: state.status === REQUEST_STATUS.loading,
    isSuccess: state.status === REQUEST_STATUS.success,
    isFailed: state.status === REQUEST_STATUS.fail,
  };
}

export default useProfile;
