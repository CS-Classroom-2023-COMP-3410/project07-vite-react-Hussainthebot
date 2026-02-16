import ShoppingCart from "../components/ShoppingCart";

function CartPage({ cartItems, onRemove }) {
  return (
    <div>
      <h2>Your Cart</h2>
      <ShoppingCart cartItems={cartItems} onRemove={onRemove} />
    </div>
  );
}

export default CartPage;
