import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const isCartVisible = useSelector((state) => state.UI.cartIsVisible);
  return (
    !isCartVisible && (
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={{
                  title: item.name,
                  id: item.id,
                  quantity: item.quantity,
                  total: item.totalPrice,
                  price: item.price,
                }}
              />
            );
          })}
        </ul>
      </Card>
    )
  );
};

export default Cart;
