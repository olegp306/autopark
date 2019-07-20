export const FETCH_DRIVERS_REQUEST = "FETCH_DRIVERS_REQUEST";
export const IS_FETCHING_DRIVERS = "IS_FETCHING_DRIVERS";
export const FETCHED_DRIVERS = "FETCHED_DRIVERS";
export const FETCH_DRIVERS_FAILED = "FETCH_DRIVERS_FAILED";

export const fetch = () => {
  return {
    type: FETCH_DRIVERS_REQUEST
  };
};

export const isFetching = () => {
  return {
    type: IS_FETCHING_DRIVERS
  };
};

export const fetched = items => {
  return {
    type: FETCHED_DRIVERS,
    payload: items
  };
};

export const fetchFailed = error => {
  return {
    type: FETCH_DRIVERS_FAILED,
    payload: error
  };
};
