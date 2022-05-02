// action types
export const USER_AUTH = "USER_AUTH";
export const ADD_USER = "ADD_USER";
export const ADD_ORDERS = "ADD_ORDERS";
// Action Creators
export const userAuth = (user) => {
  return {
    type: USER_AUTH,
    payload: user,
  };
};
export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};
export const addOrders = (orders) => {
  return {
    type: ADD_ORDERS,
    payload: orders,
  };
};
