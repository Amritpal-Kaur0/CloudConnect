import { createContext, useReducer } from "react";
import AuthReducer from "./authReducer";

const INITIAL_STATE = {
  user: {
    _id: "64d4f80e86d68610485456bd",
    profilePicture: "",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: false,
    username: "Amrit",
    email: "Amrit@gmail.com",
    city: "Brampton",
    from: "Canada",
    relationship: "Single",
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
