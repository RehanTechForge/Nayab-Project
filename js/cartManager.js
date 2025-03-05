// document.addEventListener("DOMContentLoaded", () => {
//   // Populate cart items
//   function populateCart() {
//     const cartTableBody = document.querySelector("#cart tbody");
//     const subtotalElement = document.querySelector("#subtotal td:last-child");
//     const totals = document.getElementById("totals");
//     const cartItems = CartManager.getCartItems();

//     // Clear existing cart rows
//     cartTableBody.innerHTML = "";

//     // Populate cart items
//     cartItems.forEach((item) => {
//       const row = document.createElement("tr");
//       row.innerHTML = `
//                 <td><a href="#" class="remove-item" data-id="${
//                   item.id
//                 }"><i class="fa-solid fa-circle-xmark"></i></a></td>
//                 <td><img src="${item.product.image}" alt="${
//         item.product.name
//       }"></td>
//                 <td>${item.product.name}</td>
//                 <td>Pkr ${item.product.price}</td>
//                 <td><input type="number" value="${
//                   item.quantity
//                 }" min="1" class="quantity-input" data-id="${item.id}"></td>
//                 <td>Pkr ${item.product.price * item.quantity}</td>
//             `;
//       cartTableBody.appendChild(row);
//     });

//     // Update total
//     const total = CartManager.getCartTotal();
//     subtotalElement.textContent = `Pkr ${total}`;
//     totals.textContent = `Pkr ${total}`;

//     // Add event listeners
//     addCartEventListeners();
//   }

//   function addCartEventListeners() {
//     // Remove item event
//     document.querySelectorAll(".remove-item").forEach((removeButton) => {
//       removeButton.addEventListener("click", (e) => {
//         e.preventDefault();
//         const productId = e.currentTarget.dataset.id;
//         CartManager.removeFromCart(productId);
//         populateCart();
//       });
//     });

//     // Quantity change event
//     document.querySelectorAll(".quantity-input").forEach((quantityInput) => {
//       quantityInput.addEventListener("change", (e) => {
//         const productId = e.target.dataset.id;
//         const quantity = parseInt(e.target.value);
//         CartManager.updateQuantity(productId, quantity);
//         populateCart();
//       });
//     });

//     // Proceed to Checkout
//     document.querySelector("#subtotal button").addEventListener("click", () => {
//       // Implement checkout logic
//       alert("Proceeding to Checkout");
//       // Redirect to checkout page or open checkout modal
//     });
//   }

//   // Initial cart population
//   populateCart();
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const productContainer = document.querySelector(".pro-container");
//   const addToCartButtons = document.querySelectorAll(".cart");
//   const productDetailPage = document.getElementById("prodetails");

//   // Dynamically populate featured products
//   function populateFeaturedProducts() {
//     if (productContainer) {
//       productContainer.innerHTML = products
//         .map(
//           (product) => `
//                 <div class="pro" onclick="window.location.href='sproduct.html?id=${product.id}'" data-product-id="${product.id}">
//                     <img src="${product.image}" alt="${product.name}" />
//                     <div class="des">
//                         <span>Nayab</span>
//                         <h5>${product.name}</h5>
//                         <div class="star">
//                             <i class="fa-solid fa-star"></i>
//                             <i class="fa-solid fa-star"></i>
//                             <i class="fa-solid fa-star"></i>
//                             <i class="fa-solid fa-star"></i>
//                             <i class="fa-solid fa-star"></i>
//                         </div>
//                         <h4>Pkr ${product.price}</h4>
//                     </div>
//                     <a href="#" class="cart-btn" data-product-id="${product.id}"><i class="fa-solid fa-cart-shopping cart"></i></a>
//                 </div>
//             `
//         )
//         .join("");

//       // Add event listeners to new cart buttons
//       document.querySelectorAll(".cart-btn").forEach((button) => {
//         button.addEventListener("click", (e) => {
//           e.preventDefault();
//           e.stopPropagation();
//           const productId = button.dataset.productId;
//           CartManager.addToCart(productId);
//           updateCartCount();
//         });
//       });
//     }
//   }

//   // Product Detail Page Population
//   // function populateProductDetailPage() {
//   //   const urlParams = new URLSearchParams(window.location.search);
//   //   const productId = urlParams.get("id");

//   //   if (productDetailPage && productId) {
//   //     const product = products.find((p) => p.id === parseInt(productId));

//   //     if (product) {
//   //       // Update main image
//   //       document.getElementById("MainImg").src = product.image;

//   //       // Populate small images (using same image for demonstration)
//   //       const smallImgGroup = document.querySelector(".small-img-group");
//   //       smallImgGroup.innerHTML = `
//   //                   ${product.sizes
//   //                     .map(
//   //                       (size, index) => `
//   //                       <div class="small-img-col">
//   //                           <img src="${product.image}" width="100%" class="small-img" alt="img">
//   //                       </div>
//   //                   `
//   //                     )
//   //                     .join("")}
//   //               `;

//   //       // Update product details
//   //       document.querySelector(".single-pro-details h4").textContent =
//   //         product.name;
//   //       document.querySelector(
//   //         ".single-pro-details h2"
//   //       ).textContent = `Pkr ${product.price}`;
//   //       document.querySelector(".single-pro-details span").textContent =
//   //         product.description;

//   //       // Populate size dropdown
//   //       const sizeSelect = document.querySelector(".single-pro-details select");
//   //       sizeSelect.innerHTML = `
//   //                   <option>Select Size</option>
//   //                   ${product.sizes
//   //                     .map((size) => `<option>${size}</option>`)
//   //                     .join("")}
//   //               `;

//   //       // Add to cart button
//   //       const addToCartButton = document.querySelector(
//   //         ".single-pro-details .normal"
//   //       );
//   //       addToCartButton.addEventListener("click", () => {
//   //         const quantity = document.querySelector(
//   //           '.single-pro-details input[type="number"]'
//   //         ).value;
//   //         const size = sizeSelect.value;

//   //         if (size === "Select Size") {
//   //           alert("Please select a size");
//   //           return;
//   //         }

//   //         CartManager.addToCart(productId, parseInt(quantity));
//   //         updateCartCount();
//   //       });
//   //     }
//   //   }
//   // }

//   function populateProductDetailPage() {
//     // Get product ID from URL
//     const urlParams = new URLSearchParams(window.location.search);
//     const productId = urlParams.get("id");

//     if (productDetailPage && productId) {
//       // Find the specific product
//       const product = products.find((p) => p.id === parseInt(productId));

//       if (product) {
//         // Update main image
//         const mainImg = document.getElementById("MainImg");
//         mainImg.src = product.mainImage;
//         mainImg.alt = product.name;

//         // Populate small images dynamically
//         const smallImgGroup = document.querySelector(".small-img-group");
//         smallImgGroup.innerHTML = product.images
//           .map(
//             (image, index) => `
//           <div class="small-img-col">
//             <img
//               src="${image}"
//               width="100%"
//               class="small-img"
//               alt="${product.name} - Image ${index + 1}"
//             />
//           </div>
//         `
//           )
//           .join("");

//         // Add click event to small images to change main image
//         const smallImgs = document.querySelectorAll(".small-img");
//         smallImgs.forEach((img) => {
//           img.addEventListener("click", () => {
//             mainImg.src = img.src;
//             mainImg.alt = img.alt;
//           });
//         });

//         // Update product details
//         document.querySelector(
//           ".single-pro-details h6"
//         ).textContent = `Home / ${product.category}`;
//         document.querySelector(".single-pro-details h4").textContent =
//           product.name;
//         document.querySelector(
//           ".single-pro-details h2"
//         ).textContent = `Pkr ${product.price}`;
//         document.querySelector(".single-pro-details span").textContent =
//           product.description;

//         // Populate size dropdown
//         const sizeSelect = document.querySelector(".single-pro-details select");
//         sizeSelect.innerHTML = `
//           <option>Select Size</option>
//           ${product.sizes.map((size) => `<option>${size}</option>`).join("")}
//         `;

//         // Add color options
//         if (product.colors && product.colors.length > 0) {
//           const colorContainer = document.createElement("div");
//           colorContainer.innerHTML = `
//             <h4>Available Colors</h4>
//             <div class="color-options">
//               ${product.colors
//                 .map(
//                   (color) => `
//                 <span
//                   class="color-dot"
//                   style="background-color: ${color.toLowerCase()};"
//                   title="${color}"
//                 ></span>
//               `
//                 )
//                 .join("")}
//             </div>
//           `;
//           document
//             .querySelector(".single-pro-details span")
//             .after(colorContainer);
//         }

//         // Add stock information
//         const stockInfo = document.createElement("p");
//         stockInfo.innerHTML = `<strong>Stock:</strong> ${product.stock} items available`;
//         document.querySelector(".single-pro-details select").after(stockInfo);

//         // Add to cart button functionality
//         const addToCartButton = document.querySelector(
//           ".single-pro-details .normal"
//         );
//         addToCartButton.addEventListener("click", () => {
//           const quantity = document.querySelector(
//             '.single-pro-details input[type="number"]'
//           ).value;
//           const size = sizeSelect.value;

//           if (size === "Select Size") {
//             alert("Please select a size");
//             return;
//           }

//           CartManager.addToCart(productId, parseInt(quantity));
//           updateCartCount();
//         });
//       } else {
//         console.error("Product not found");
//       }
//     }
//   }

//   // Update cart count in UI
//   function updateCartCount() {
//     const cartCountElements = document.querySelectorAll(".cart-count");
//     const cartCount = CartManager.getCartCount();
//     cartCountElements.forEach((el) => {
//       el.textContent = cartCount;
//       el.style.display = cartCount > 0 ? "inline-block" : "none";
//     });
//   }

//   // Initialize
//   populateFeaturedProducts();
//   populateProductDetailPage();
//   updateCartCount();
// });
document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.querySelector(".pro-container");
  const addToCartButtons = document.querySelectorAll(".cart");
  const productDetailPage = document.getElementById("prodetails");

  // Dynamically populate featured products
  function populateFeaturedProducts() {
    if (productContainer) {
      productContainer.innerHTML = products
        .map(
          (product) => `
                <div class="pro" onclick="window.location.href='sproduct.html?id=${product.id}'" data-product-id="${product.id}">
                    <img src="${product.image}" alt="${product.name}" />
                    <div class="des">
                        <span>Nayab</span>
                        <h5>${product.name}</h5>
                        <div class="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <h4>Pkr ${product.price}</h4>
                    </div>
                    <a href="#" class="cart-btn" data-product-id="${product.id}"><i class="fa-solid fa-cart-shopping cart"></i></a>
                </div>
            `
        )
        .join("");

      // Add event listeners to new cart buttons
      document.querySelectorAll(".cart-btn").forEach((button) => {
        button.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          const productId = button.dataset.productId;
          CartManager.addToCart(productId);
          updateCartCount();
        });
      });
    }
  }

  // Product Detail Page Population
  function populateProductDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (productDetailPage && productId) {
      console.log("PRODUCTSSS", products);
      const product = products.find((p) => p.id === parseInt(productId));

      if (product) {
        // Update main image
        document.getElementById("MainImg").src = product.mainImage;

        // Populate small images (using same image for demonstration)
        const smallImgGroup = document.querySelector(".small-img-group");
        smallImgGroup.innerHTML = `
                    ${product.images
                      .map(
                        (img, index) => `
                        <div class="small-img-col">
                            <img src="${img}" width="100%" class="small-img" alt="img">
                        </div>
                    `
                      )
                      .join("")}
                `;

        // Update product details
        document.querySelector(".single-pro-details h4").textContent =
          product.name;
        document.querySelector(
          ".single-pro-details h2"
        ).textContent = `Pkr ${product.price}`;
        document.querySelector(".single-pro-details span").textContent =
          product.description;

        // Populate size dropdown
        const sizeSelect = document.querySelector(".single-pro-details select");
        sizeSelect.innerHTML = `
                    <option>Select Size</option>
                    ${product.sizes
                      .map((size) => `<option>${size}</option>`)
                      .join("")}
                `;

        // Add to cart button
        const addToCartButton = document.querySelector(
          ".single-pro-details .normal"
        );
        addToCartButton.addEventListener("click", () => {
          const quantity = document.querySelector(
            '.single-pro-details input[type="number"]'
          ).value;
          const size = sizeSelect.value;

          if (size === "Select Size") {
            alert("Please select a size");
            return;
          }

          CartManager.addToCart(productId, parseInt(quantity));
          updateCartCount();
        });
      }
    }
  }

  // Update cart count in UI
  function updateCartCount() {
    const cartCountElements = document.querySelectorAll(".cart-count");
    const cartCount = CartManager.getCartCount();
    cartCountElements.forEach((el) => {
      el.textContent = cartCount;
      el.style.display = cartCount > 0 ? "inline-block" : "none";
    });
  }

  // Initialize
  populateFeaturedProducts();
  populateProductDetailPage();
  updateCartCount();
});

class CartManager {
  // Add a product to cart
  static addToCart(productId, quantity = 1) {
    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItem = cart.find((item) => item.id === parseInt(productId));

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.push({
          id: parseInt(productId),
          quantity: quantity,
          addedAt: new Date().toISOString(),
        });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      return true;
    } catch (error) {
      console.error("Error adding item to cart:", error);
      return false;
    }
  }

  // Remove a product from cart
  static removeFromCart(productId) {
    try {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart = cart.filter((item) => item.id !== parseInt(productId));
      localStorage.setItem("cart", JSON.stringify(cart));
      return true;
    } catch (error) {
      console.error("Error removing item from cart:", error);
      return false;
    }
  }

  // Update quantity of a product in cart
  static updateQuantity(productId, quantity) {
    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItem = cart.find((item) => item.id === parseInt(productId));

      if (existingItem) {
        existingItem.quantity = quantity;
        localStorage.setItem("cart", JSON.stringify(cart));
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error updating cart quantity:", error);
      return false;
    }
  }

  // Get cart items with product details
  static getCartItems() {
    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      return cart.map((item) => {
        const product = products.find((p) => p.id === item.id);
        return {
          ...item,
          product: product || {
            name: "Product not found",
            price: 0,
            image: "img/not-found.png",
          },
        };
      });
    } catch (error) {
      console.error("Error getting cart items:", error);
      return [];
    }
  }

  // Calculate cart total
  static getCartTotal() {
    try {
      const cartItems = this.getCartItems();
      return cartItems.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0);
    } catch (error) {
      console.error("Error calculating cart total:", error);
      return 0;
    }
  }

  // Get cart item count
  static getCartCount() {
    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      return cart.reduce((count, item) => count + item.quantity, 0);
    } catch (error) {
      console.error("Error getting cart count:", error);
      return 0;
    }
  }

  // Clear the entire cart
  static clearCart() {
    localStorage.removeItem("cart");
    return true;
  }
}
