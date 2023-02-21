import { ADD, DELETE, ENTER, SHIFT } from "./constants";

export const setDelete = (payload) => {
  return {
    type: DELETE,
    payload,
  };
};

export const setEnter = (payload) => {
  return {
    type: ENTER,
    payload,
  };
};

export const setADD = (payload) => {
  return {
    type: ADD,
    payload,
  };
};

export const setShift = (payload) => {
  return {
    type: SHIFT,
    payload: payload === 2 ? 0 : payload + 1,
  };
};
