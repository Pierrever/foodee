import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "../UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  const userProgressCtx = useContext(UserProgressContext);
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce((totalNum, item) => {
    return totalNum + item.quantity;
  }, 0);

  function handleShowCart() {
    console.log("fufu");
    userProgressCtx.showCart();
  }
  return (
    <header id="main-header" style={{ position: "fixed", zIndex: "1000" }}>
      <div id="title">
        <img src={logo} />
        <h1 style={{ color: "rgb(255, 49, 49)" }}>PEDRITO'S YUMMY</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
