import { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "./Modal";
import { currencyFormatter } from "../util/formatting";
import Button from "./Button";
import UserPrContext from "../store/UserPrContext";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userPrCtx = useContext(UserPrContext);
  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    totalPrice + item.quantity * item.price;
  }, 0);
  return (
    <Modal open={userPrCtx.progress === "cart"}>
      <h2>Your cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly>Checkout</Button>
        <Button>Close</Button>
      </p>
    </Modal>
  );
}
