export const FETCH_DRIVERS_REQUEST = "FETCH_DRIVERS_REQUEST";
export const IS_FETCHING = "IS_FETCHING";
export const FETCHED = "FETCHED";
export const FETCH_FAILED = "FETCH_FAILED";

export const fetch = () => {
  return {
    type: FETCH_DRIVERS_REQUEST
  };
};

export const isFetching = () => {
  return {
    type: IS_FETCHING
  };
};

export const fetched = items => {
  return {
    type: FETCHED,
    payload: items
  };
};

export const fetchFailed = error => {
  return {
    type: FETCH_FAILED,
    payload: error
  };
};
