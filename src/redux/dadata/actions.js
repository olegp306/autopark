export const FETCH_SUGGESTIONS_REQUEST = "FETCH_SUGGESTIONS_REQUEST";
export const IS_FETCHING_SUGGESTIONS = "IS_FETCHING_SUGGESTIONS";
export const FETCHED_SUGGESTIONS = "FETCHED_SUGGESTIONS";
export const FETCH_SUGGESTIONS_FAILED = "FETCH_SUGGESTIONS_FAILED";
export const RESET_SUGGESTIONS = "RESET_SUGGESTIONS";



export const fetch = query => {
  return {
    type: FETCH_SUGGESTIONS_REQUEST,
    payload: query
  };
};

export const isFetching = () => {
  return {
    type: IS_FETCHING_SUGGESTIONS
  };
};

export const fetched = items => {
  return {
    type: FETCHED_SUGGESTIONS,
    payload: items
  };
};

export const fetchFailed = error => {
  return {
    type: FETCH_SUGGESTIONS_FAILED,
    payload: error
  };
};

export const reset = () => {
  return {
    type: RESET_SUGGESTIONS
  };
};
