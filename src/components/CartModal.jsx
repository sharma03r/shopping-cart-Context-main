import styles from "../styles/Cartmodal.module.css";
import { useValue } from "../itemContext";
function CartModal(props) {
  const { total, reset, toggleCart, cart } = props;
  console.log(cart);
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={toggleCart}>
        Close
      </div>
      <div className={styles.clearButton} onClick={reset}>
        Clear
      </div>
      <div className={styles.itemContainer}>
        {cart.map((item, index) => (
          <div className={styles.cartCard} key={item.id}>
            <h1>{item.name}</h1>
            <h3>X {item.qty}</h3>
            <h3>X {item.price * item.qty}</h3>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>{total}</div>
      </div>
    </div>
  );
}

export default CartModal;
