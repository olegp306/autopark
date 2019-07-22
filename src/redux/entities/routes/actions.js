export const FETCH_ROUTES_REQUEST = "FETCH_ROUTES_REQUEST";
export const IS_FETCHING_ROUTES = "IS_FETCHING_ROUTES";
export const FETCHED_ROUTES = "FETCHED_ROUTES";
export const FETCH_ROUTES_FAILED = "FETCH_ROUTES_FAILED";

export const fetch = () => {
  return {
    type: FETCH_ROUTES_REQUEST
  };
};

export const isFetching = () => {
  return {
    type: IS_FETCHING_ROUTES
  };
};

export const fetched = items => {
  return {
    type: FETCHED_ROUTES,
    payload: items
  };
};

export const fetchFailed = error => {
  return {
    type: FETCH_ROUTES_FAILED,
    payload: error
  };
};
