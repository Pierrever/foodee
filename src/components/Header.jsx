import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "../UI/Button";
import CartContext from "../store/CartContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce((totalNum, item) => {
    return totalNum + item.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} />
        <h1></h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
