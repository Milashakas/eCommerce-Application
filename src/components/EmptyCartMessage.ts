const EmptyCartMessage = () => {
  const view = `
    <i class="fa-solid fa-cart-arrow-down"></i>
    <h2 class="emptyCart-header">Your cart is empty now</h2>
    <p class="emptyCart-message">Before making some orders you have to add sometging to the cart</p>
    <a href="/catalog" class="emptyCart-catalogBtn">Back to catalog</a>
  `;

  return view;
};

export default EmptyCartMessage;
