import { useReducer } from "react";
import { createContext, useState } from "react";

export const UserContext = createContext();

function reducer(statue, action) {
  switch (action.type) {
    case "updateName":
      return { name: action.payload };
    default:
      return statueF;
  }
}

export const UserProvider = (props) => {
  // store the current user in state at the top level
  const [currentUser, setCurrentUser] = useState({
    name: "kingsley"
  });
  const [reduderUser, dispatch] = useReducer(reducer, { name: "kingsley" });
  // sets user object in state, shared via context
  const handleUpdateUser = (user) => {
    setCurrentUser(user);
    dispatch({ type: "updateName", payload: user });
  };

  const function1 = () => {
    console.log("function1");
    setCurrentUser(1);
  };
  // 2. Provide the context.
  // The Provider component of any context (UserContext.Provider)
  // sends data via its value prop to all children at every level.
  // We are sending both the current user and an update function
  return (
    <UserContext.Provider value={{ currentUser, handleUpdateUser, function1 }}>
      {props.children}
    </UserContext.Provider>
  );
};
