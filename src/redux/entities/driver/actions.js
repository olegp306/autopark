export const UPDATE_DRIVER_REQUEST = "UPDATE_DRIVER_REQUEST";
export const IS_UPDATING = "IS_UPDATING";
export const UPDATED = "UPDATED";
export const UPDATE_FAILED = "UPDATE_FAILED";

export const ADD_DRIVER_REQUEST = "ADD_DRIVER_REQUEST";
export const IS_ADDING = "IS_ADDING";
export const ADDED = "ADDED";
export const ADDING_FAILED = "ADDING_FAILED";

export const update = driver => {
  return {
    type: UPDATE_DRIVER_REQUEST,
    payload: driver
  };
};

export const isUpdating = isUpdated => {
  return {
    type: IS_UPDATING,
    payload: isUpdating
  };
};

export const updated = () => {
  return {
    type: UPDATED
  };
};

export const updateFailed = error => {
  return {
    type: UPDATE_FAILED,
    payload: error
  };
};

export const add = driver => {
  return {
    type: ADD_DRIVER_REQUEST,
    payload: driver
  };
};

export const isAdding = isAdding => {
  return {
    type: IS_ADDING,
    payload: isAdding
  };
};

export const added = () => {
  return {
    type: ADDED
  };
};

export const addingFailed = error => {
  return {
    type: ADDING_FAILED,
    payload: error
  };
};
