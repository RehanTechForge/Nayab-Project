// script.js - Main JavaScript file for Nayab Clothing website

class ProductRenderer {
  // Render a product card for the home/shop page
  static createProductCard(product) {
    return `
    <div class="pro">
      <img src="${product.mainImage || product.image}" alt="${product.name}" />
      <div class="des">
        <span>${product.brand}</span>
        <h5>${product.name}</h5>
        <div class="star">
          ${'<i class="fa-solid fa-star"></i>'.repeat(
            Math.floor(product.rating)
          )}
        </div>
        <h4>${this.formatCurrency(product.price)}</h4>
      </div>
      <a href="#" class="cart-icon" onclick="event.stopPropagation()">
        <i class="fa-solid fa-cart-shopping cart"></i>
      </a>
      <span  onclick="window.location.href='sproduct.html?id=${
        product.id
      }'">View Details</span>
    </div>
  `;
  }

  // Generate star rating HTML based on rating value
  static generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    let starsHTML = "";

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      starsHTML += '<i class="fa-solid fa-star"></i>';
    }

    // Add half star if needed
    if (halfStar) {
      starsHTML += '<i class="fa-solid fa-star-half-stroke"></i>';
    }

    return starsHTML;
  }

  // Format currency in PKR
  static formatCurrency(amount) {
    return `Pkr ${amount.toLocaleString()}`;
  }

  // Render products to a container
  static renderProducts(containerClass, products) {
    const container = document.getElementById(`${containerClass}`);
    if (!container) return;

    container.innerHTML = products
      .map((product) => this.createProductCard(product))
      .join("");

    // Add event listeners to the add-to-cart buttons
    container.querySelectorAll(".add-to-cart").forEach((button) => {
      button.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent triggering the parent's click event
        const productId = button.getAttribute("data-id");

        if (!localStorage.getItem("token")) {
          alert("Please login to add items to cart");
          return (window.location.href = "login.html");
        }

        if (CartManager.addToCart(productId)) {
          alert("Product added to cart!");
        } else {
          alert("Failed to add product to cart");
        }
      });
    });

    // Add click event to product cards to navigate to product detail page
    container.querySelectorAll(".pro").forEach((productCard) => {
      productCard.addEventListener("click", () => {
        const productId = productCard.getAttribute("data-id");
        window.location.href = `sproduct.html?id=${productId}`;
      });
    });
  }

  // Render product details on product detail page
  static renderProductDetails(productId) {
    const product = products.find((p) => p.id === parseInt(productId));
    if (!product) return false;

    // Update main image
    const mainImg = document.getElementById("MainImg");
    if (mainImg) mainImg.src = product.images[0];

    // Update small images
    const smallImgCols = document.querySelectorAll(".small-img-col");
    product.images.forEach((img, index) => {
      if (smallImgCols[index]) {
        const smallImg = smallImgCols[index].querySelector(".small-img");
        if (smallImg) smallImg.src = img;
      }
    });

    // Update product details
    const detailsSection = document.querySelector(".single-pro-details");
    if (detailsSection) {
      // Update breadcrumb
      detailsSection.querySelector(
        "h6"
      ).textContent = `Home / ${product.category}`;

      // Update product name
      detailsSection.querySelector("h4").textContent = product.name;

      // Update price
      detailsSection.querySelector("h2").textContent = this.formatCurrency(
        product.price
      );

      // Update sizes dropdown
      const sizeSelect = detailsSection.querySelector("select");
      if (sizeSelect) {
        sizeSelect.innerHTML = `<option>Select Size</option>`;
        product.sizes.forEach((size) => {
          sizeSelect.innerHTML += `<option>${size}</option>`;
        });
      }

      // Update description
      detailsSection.querySelector("span").textContent = product.description;

      // Add event listener to Add to Cart button
      const addToCartBtn = detailsSection.querySelector("button.normal");
      if (addToCartBtn) {
        addToCartBtn.addEventListener("click", () => {
          const quantity = parseInt(
            detailsSection.querySelector('input[type="number"]').value
          );

          if (!localStorage.getItem("token")) {
            alert("Please login to add items to cart");
            return (window.location.href = "login.html");
          }

          if (CartManager.addToCart(product.id, quantity)) {
            alert("Product added to cart!");
          } else {
            alert("Failed to add product to cart");
          }
        });
      }
    }

    return true;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Initialize the authentication status
  initAuth();

  // Handle mobile navigation
  initMobileNav();

  // Initialize products on homepage
  if (
    document.getElementById("featured-container") ||
    document.getElementById("new-arrivals-container")
  ) {
    initHomePage();
  }

  // Initialize product detail page if on that page
  if (document.getElementById("prodetails")) {
    initProductDetailPage();
  }

  // Initialize cart page if on that page
  if (document.querySelector(".cart-items")) {
    initCartPage();
  }
});

// Initialize authentication
function initAuth() {
  const authLink = document.getElementById("auth-link");
  if (!authLink) return;

  const token = localStorage.getItem("token");

  authLink.innerHTML = token
    ? `<a href="#" id="logout-link"><i class="fas fa-sign-out-alt"></i> Logout</a>`
    : `<a href="login.html" class="${
        window.location.pathname.includes("login.html") ? "active" : ""
      }">
        <i class="fas fa-sign-in-alt"></i> Login
      </a>`;

  if (token) {
    document.getElementById("logout-link").addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("token");
      window.location.href = "index.html";
    });
  }
}

// Initialize mobile navigation
function initMobileNav() {
  const bar = document.getElementById("bar");
  const close = document.getElementById("close");
  const nav = document.getElementById("navbar");

  if (bar) {
    bar.addEventListener("click", () => {
      nav.classList.add("active");
    });
  }

  if (close) {
    close.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  }
}

// Initialize homepage products
function initHomePage() {
  // Get featured products (first 4 products marked as featured)
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 4);

  // Get new arrivals (products marked as newArrival)
  const newArrivals = products
    .filter((product) => product.newArrival)
    .slice(0, 4);

  // Render products
  ProductRenderer.renderProducts("featured-container", featuredProducts);
  ProductRenderer.renderProducts("new-arrivals-container", newArrivals);
}

// Initialize product detail page
function initProductDetailPage() {
  // Get product ID from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (productId) {
    // Render product details
    const success = ProductRenderer.renderProductDetails(productId);

    if (!success) {
      // Product not found, redirect to shop page
      alert("Product not found!");
      window.location.href = "shop.html";
    }

    // Set up image gallery functionality
    const mainImg = document.getElementById("MainImg");
    const smallImgs = document.getElementsByClassName("small-img");

    if (mainImg && smallImgs.length > 0) {
      Array.from(smallImgs).forEach((img, index) => {
        img.addEventListener("click", () => {
          mainImg.src = img.src;
        });
      });
    }
  } else {
    // No product ID, redirect to shop page
    window.location.href = "shop.html";
  }

  // Also render related products
  const relatedProducts = products.slice(0, 4); // Just show first 4 products for now
  ProductRenderer.renderProducts("product1 .pro-container", relatedProducts);
}

// Initialize cart page
function initCartPage() {
  renderCart();

  // Add event listener for updating quantities
  document.querySelectorAll(".cart-quantity").forEach((input) => {
    input.addEventListener("change", (e) => {
      const productId = e.target.getAttribute("data-id");
      const quantity = parseInt(e.target.value);

      if (quantity < 1) {
        e.target.value = 1;
        CartManager.updateQuantity(productId, 1);
      } else {
        CartManager.updateQuantity(productId, quantity);
      }

      renderCart();
    });
  });

  // Add event listener for removing items
  document.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = e.target.getAttribute("data-id");
      CartManager.removeFromCart(productId);
      renderCart();
    });
  });

  // Add event listener for checkout button
  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (CartManager.getCartCount() > 0) {
        alert("Proceeding to checkout...");
        // Here you would redirect to a checkout page
      } else {
        alert("Your cart is empty!");
      }
    });
  }
}

// Render cart items and totals
function renderCart() {
  const cartItemsContainer = document.querySelector(".cart-items");
  if (!cartItemsContainer) return;

  const cartItems = CartManager.getCartItems();

  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML =
      '<tr><td colspan="5">Your cart is empty</td></tr>';
    document.getElementById("subtotal").innerHTML = `
      <h3>Cart Totals</h3>
      <table>
        <tr>
          <td>Cart Subtotal</td>
          <td>Pkr 0</td>
        </tr>
        <tr>
          <td>Shipping</td>
          <td>Pkr 0</td>
        </tr>
        <tr>
          <td><strong>Total</strong></td>
          <td><strong>Pkr 0</strong></td>
        </tr>
      </table>
      <button class="normal" id="checkout-btn" disabled>Proceed to checkout</button>
    `;
    return;
  }

  // Render cart items
  cartItemsContainer.innerHTML = cartItems
    .map(
      (item) => `
    <tr>
      <td><a href="#" class="remove-item" data-id="${
        item.id
      }"><i class="far fa-times-circle"></i></a></td>
      <td><img src="${item.product.mainImage}" alt="${item.product.name}"></td>
      <td>${item.product.name}</td>
      <td>Pkr ${item.product.price.toLocaleString()}</td>
      <td><input type="number" value="${
        item.quantity
      }" min="1" class="cart-quantity" data-id="${item.id}"></td>
      <td>Pkr ${(item.product.price * item.quantity).toLocaleString()}</td>
    </tr>
  `
    )
    .join("");

  // Calculate totals
  const subtotal = CartManager.getCartTotal();
  const shipping = subtotal > 0 ? 150 : 0; // Example shipping cost
  const total = subtotal + shipping;

  // Update cart totals
  document.getElementById("subtotal").innerHTML = `
    <h3>Cart Totals</h3>
    <table>
      <tr>
        <td>Cart Subtotal</td>
        <td>Pkr ${subtotal.toLocaleString()}</td>
      </tr>
      <tr>
        <td>Shipping</td>
        <td>Pkr ${shipping.toLocaleString()}</td>
      </tr>
      <tr>
        <td><strong>Total</strong></td>
        <td><strong>Pkr ${total.toLocaleString()}</strong></td>
      </tr>
    </table>
    <button class="normal" id="checkout-btn">Proceed to checkout</button>
  `;

  // Reinitialize event listeners
  document.querySelectorAll(".cart-quantity").forEach((input) => {
    input.addEventListener("change", (e) => {
      const productId = e.target.getAttribute("data-id");
      const quantity = parseInt(e.target.value);

      if (quantity < 1) {
        e.target.value = 1;
        CartManager.updateQuantity(productId, 1);
      } else {
        CartManager.updateQuantity(productId, quantity);
      }

      renderCart();
    });
  });

  document.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const productId = e.target
        .closest(".remove-item")
        .getAttribute("data-id");
      CartManager.removeFromCart(productId);
      renderCart();
    });
  });

  document.getElementById("checkout-btn").addEventListener("click", () => {
    alert("Proceeding to checkout...");
    // Here you would redirect to a checkout page
  });
}
