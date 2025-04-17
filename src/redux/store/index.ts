import { createStore } from "redux";

const initialState = {
  selectedUser: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_SELECTED_USER":
      return { ...state, selectedUser: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

const setSelectedUser = (user: any) => ({
  type: "SET_SELECTED_USER",
  payload: user,
});

export { store, setSelectedUser };
