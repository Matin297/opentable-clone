import { useState } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

import { REQUEST_STATUS, StatusType } from "@/utils/constants";

type Error = {
  message?: string;
  party?: string;
  time?: string;
  date?: string;
};

type Availability = {
  isAvailable: boolean;
  time: string;
};

type AvailabilityState = {
  data: Availability[];
  status: StatusType;
  error: Error | null;
};

type Params = {
  slug: string;
  time: string;
  date: string;
  party: string;
};

function useAvailability() {
  const [state, setState] = useState<AvailabilityState>({
    status: REQUEST_STATUS.idle,
    error: null,
    data: [],
  });

  const getAvailability = ({ slug, time, date, party }: Params) => {
    setState((prev) => ({
      ...prev,
      status: REQUEST_STATUS.loading,
    }));

    return axios
      .get(`/api/restaurant/${slug}/availability`, {
        params: {
          time,
          date,
          party,
        },
      })
      .then(
        (response: AxiosResponse<Availability[]>) => {
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
    getAvailability,
    isIdle: state.status === REQUEST_STATUS.idle,
    isLoading: state.status === REQUEST_STATUS.loading,
    isSuccess: state.status === REQUEST_STATUS.success,
    isFailed: state.status === REQUEST_STATUS.fail,
  };
}

export default useAvailability;
