export const set = (payload, action) => {
  return {
    type: action,
    payload,
  };
};
