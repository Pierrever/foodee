import { createContext, useState } from "react";

const UserPrContext = createContext({
  //dummy initial value
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserPrContextProvider({ children }) {
  const [userPr, setUserPr] = useState("");

  function showCart() {
    setUserPr("cart");
  }
  function hideCart() {
    setUserPr("");
  }
  function showCheckout() {
    setUserPr("checkout");
  }

  function hideCheckout() {
    setUserPr("");
  }

  const userPrCtx = {
    pr: userPr,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserPrContext.Provider value={userPrCtx}>
      {children}
    </UserPrContext.Provider>
  );
}
export default UserPrContext;
