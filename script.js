let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product, price) {
  cart.push({ product, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product + " added to cart!");
}

function displayCart() {
  let cartItems = document.getElementById("cart-items");
  let total = document.getElementById("total");
  cartItems.innerHTML = "";
  let sum = 0;

  cart.forEach((item, index) => {
    cartItems.innerHTML += `<p>${item.product} - $${item.price} 
    <button onclick="removeItem(${index})">Remove</button></p>`;
    sum += item.price;
  });

  total.innerText = "Total: $" + sum;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

window.onload = function() {
  if (document.getElementById("cart-items")) {
    displayCart();
  }
};
fetch("https://my-online-shop-api.onrender.com/products.json")
  .then(res => res.json())
  .then(data => {
    console.log(data.products); 
    // code to render products
  });
