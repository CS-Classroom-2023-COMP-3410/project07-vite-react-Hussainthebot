function ShoppingCart({ cartItems, onRemove }) {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h3>Shopping Cart</h3>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span>{item.title}</span>

            <button onClick={() => onRemove(index)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default ShoppingCart;
