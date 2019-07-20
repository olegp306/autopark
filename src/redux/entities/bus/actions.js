export const UPDATE_BUS_REQUEST = "UPDATE_BUS_REQUEST";
export const IS_UPDATING_BUS = "IS_UPDATING_BUS";
export const UPDATED_BUS = "UPDATED_BUS";
export const UPDATE_BUS_FAILED = "UPDATE_FAILED";

export const ADD_BUS_REQUEST = "ADD_BUS_REQUEST";
export const IS_ADDING_BUS = "IS_ADDING_BUS";
export const ADDED_BUS = "ADDED_BUS";
export const ADDING_BUS_FAILED = "ADDING_BUS_FAILED";

export const REMOVE_BUS_REQUEST = "REMOVE_BUS_REQUEST";
export const IS_REMOVING_BUS = "IS_REMOVING_BUS";
export const REMOVED_BUS = "REMOVED_BUS";
export const REMOVING_BUS_FAILED = "REMOVING_BUS_FAILED";

export const update = bus => {
  return {
    type: UPDATE_BUS_REQUEST,
    payload: bus
  };
};

export const isUpdating = isUpdated => {
  return {
    type: IS_UPDATING_BUS,
    payload: isUpdating
  };
};

export const updated = () => {
  return {
    type: UPDATED_BUS
  };
};

export const updateFailed = error => {
  return {
    type: UPDATE_BUS_FAILED,
    payload: error
  };
};

export const add = bus => {
  return {
    type: ADD_BUS_REQUEST,
    payload: bus
  };
};

export const isAdding = isAdding => {
  return {
    type: IS_ADDING_BUS,
    payload: isAdding
  };
};

export const added = () => {
  return {
    type: ADDED_BUS
  };
};

export const addingFailed = error => {
  return {
    type: ADDING_BUS_FAILED,
    payload: error
  };
};

export const remove = driver => {
  return {
    type: REMOVE_BUS_REQUEST,
    payload: driver
  };
};

export const isRemoving = payload => {
  return {
    type: IS_REMOVING_BUS,
    payload: payload
  };
};

export const removed = () => {
  return {
    type: REMOVED_BUS
  };
};

export const removingFailed = error => {
  return {
    type: REMOVING_BUS_FAILED,
    payload: error
  };
};