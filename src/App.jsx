import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import { UserPrContextProvider } from "./store/UserPrContext";
import UserPrContext from "./store/UserPrContext";
import Cart from "./UI/Cart";

function App() {
  return (
    <>
      <UserPrContextProvider>
        <CartContextProvider>
          <Header />
          <Meals />
          <Cart />
        </CartContextProvider>
      </UserPrContextProvider>
    </>
  );
}

export default App;
