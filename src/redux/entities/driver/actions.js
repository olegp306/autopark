export const UPDATE_DRIVER_REQUEST = "UPDATE_DRIVER_REQUEST";
export const IS_UPDATING_DRIVER = "IS_UPDATING_DRIVER";
export const UPDATED_DRIVER= "UPDATED_DRIVER";
export const UPDATE_DRIVER_FAILED = "UPDATE_DRIVER_FAILED";

export const ADD_DRIVER_REQUEST = "ADD_DRIVER_REQUEST";
export const IS_ADDING_DRIVER = "IS_ADDING_DRIVER";
export const ADDED_DRIVER = "ADDED_DRIVER";
export const ADDING_FAILED_DRIVER = "ADDING_FAILED_DRIVER";


export const REMOVE_DRIVER_REQUEST = "REMOVE_DRIVER_REQUEST";
export const IS_REMOVING_DRIVER = "IS_REMOVING_DRIVER";
export const REMOVED_DRIVER = "REMOVED_DRIVER";
export const REMOVING_FAILED_DRIVER = "REMOVING_FAILED_DRIVER";

export const update = driver => {
  return {
    type: UPDATE_DRIVER_REQUEST,
    payload: driver
  };
};

export const isUpdating = payload => {
  return {
    type: IS_UPDATING_DRIVER,
    payload: payload
  };
};

export const updated = () => {
  return {
    type: UPDATED_DRIVER
  };
};

export const updateFailed = error => {
  return {
    type: UPDATE_DRIVER_FAILED,
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
    type: IS_ADDING_DRIVER,
    payload: payload
  };
};

export const added = () => {
  return {
    type: ADDED_DRIVER
  };
};

export const addingFailed = error => {
  return {
    type: ADDING_DRIVER_FAILED,
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
    type: IS_REMOVING_DRIVER,
    payload: payload
  };
};

export const removed = () => {
  return {
    type: REMOVED_DRIVER
  };
};

export const removingFailed = error => {
  return {
    type: REMOVING_DRIVER_FAILED,
    payload: error
  };
};
