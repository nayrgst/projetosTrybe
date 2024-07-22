const saveCartItems = (cartItems, partItems) => {
  localStorage.setItem(cartItems, partItems);
};

saveCartItems('<ol><li>Item</li></ol>');
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
