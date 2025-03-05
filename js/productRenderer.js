class ProductRenderer {
  // Render a product card for the home/shop page
  static createProductCard(product) {
    console.log("PROCUST", product);
    return `
    <div class="pro" data-id="${product.id}">
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
      
      <span class="view-details" onclick="window.location.href='sproduct.html?id=${
        product.id
      }'">View Details</span>

    </div>
  `;
  }
  // <a href="#" class="cart-icon" onclick="event.stopPropagation()">
  //       <i class="fa-solid fa-cart-shopping cart"></i>
  //     </a>

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
