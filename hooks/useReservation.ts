import { useState } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import { Booking } from "@/utils/prisma";

import { REQUEST_STATUS, StatusType } from "@/utils/constants";

type Error = {
  message?: string;
  email?: string;
  phone?: string;
  first_name?: string;
  last_name?: string;
};

type AvailabilityState = {
  data: Booking | null;
  status: StatusType;
  error: Error | null;
};

export type Params = {
  slug: string;
  time: string;
  date: string;
  party: string;
};

function useReservation() {
  const [state, setState] = useState<AvailabilityState>({
    status: REQUEST_STATUS.idle,
    error: null,
    data: null,
  });

  const reserve = ({ slug, time, date, party }: Params, formData: FormData) => {
    setState((prev) => ({
      ...prev,
      status: REQUEST_STATUS.loading,
    }));

    return axios
      .post(`/api/restaurant/${slug}/reserve`, formData, {
        params: {
          time,
          date,
          party,
        },
      })
      .then(
        (response: AxiosResponse<Booking>) => {
          setState((prev) => ({
            ...prev,
            status: REQUEST_STATUS.success,
            data: response.data,
          }));
        },
        (error: AxiosError<Error>) => {
          setState((prev) => ({
            ...prev,
            error: error.response?.data || error || null,
            status: REQUEST_STATUS.fail,
          }));
          return Promise.reject(error);
        }
      );
  };

  return {
    ...state,
    reserve,
    isIdle: state.status === REQUEST_STATUS.idle,
    isLoading: state.status === REQUEST_STATUS.loading,
    isSuccess: state.status === REQUEST_STATUS.success,
    isFailed: state.status === REQUEST_STATUS.fail,
  };
}

export default useReservation;
