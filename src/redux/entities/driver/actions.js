export const UPDATE_DRIVER_REQUEST = "UPDATE_DRIVER_REQUEST";
export const IS_UPDATING = "IS_UPDATING";
export const UPDATED = "UPDATED";
export const UPDATE_FAILED = "UPDATE_FAILED";

export const ADD_DRIVER_REQUEST = "ADD_DRIVER_REQUEST";
export const IS_ADDING = "IS_ADDING";
export const ADDED = "ADDED";
export const ADDING_FAILED = "ADDING_FAILED";


export const REMOVE_DRIVER_REQUEST = "REMOVE_DRIVER_REQUEST";
export const IS_REMOVING = "IS_REMOVING";
export const REMOVED = "REMOVED";
export const REMOVING_FAILED = "REMOVING_FAILED";

export const update = driver => {
  return {
    type: UPDATE_DRIVER_REQUEST,
    payload: driver
  };
};

export const isUpdating = payload => {
  return {
    type: IS_UPDATING,
    payload: payload
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

export const isAdding = payload => {
  return {
    type: IS_ADDING,
    payload: payload
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

export const remove = driver => {
  return {
    type: REMOVE_DRIVER_REQUEST,
    payload: driver
  };
};

export const isRemoving = payload => {
  return {
    type: IS_REMOVING,
    payload: payload
  };
};

export const removed = () => {
  return {
    type: REMOVED
  };
};

export const removingFailed = error => {
  return {
    type: REMOVING_FAILED,
    payload: error
  };
};
