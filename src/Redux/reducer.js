import { ADD_ORDERS, ADD_USER, USER_AUTH } from "./actions";

const init = {
  isAuth: false,
  User: {},
  orders: []
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case USER_AUTH:
      return {
        ...store,
        isAuth: payload,
      };
    case ADD_USER:
      return {
        ...store,
        User: payload,
      };
    case ADD_ORDERS:
      return {
        ...store,
        orders: payload,
      };

    default:
      return store;
  }
};
