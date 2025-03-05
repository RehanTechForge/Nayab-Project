document.addEventListener("DOMContentLoaded", () => {
  console.log("All Products:", products);
  console.log(
    "Product IDs:",
    products.map((p) => p.id)
  );
});

// Update product details on the page
function updateProductDetails(product) {
  console.log("Updating product details for:", product);

  // Update main image
  const mainImg = document.getElementById("MainImg");
  if (mainImg && product.mainImage) {
    mainImg.src = product.mainImage;
    mainImg.alt = product.name;
  }

  // Update small images
  const smallImgs = document.getElementsByClassName("small-img");
  if (product.images && product.images.length > 0) {
    for (let i = 0; i < smallImgs.length; i++) {
      if (product.images[i]) {
        smallImgs[i].src = product.images[i];
        smallImgs[i].alt = `${product.name} - view ${i + 1}`;
      }
    }
  }

  // Update product info
  const detailsSection = document.querySelector(".single-pro-details");
  if (detailsSection) {
    // Update breadcrumb
    const breadcrumb = detailsSection.querySelector("h6");
    if (breadcrumb) {
      breadcrumb.textContent = `Home / ${product.category || "T-Shirt"}`;
    }

    // Update product name
    const name = detailsSection.querySelector("h4");
    if (name) {
      name.textContent = product.name;
    }

    // Update price
    const price = detailsSection.querySelector("h2");
    if (price) {
      price.textContent = `Pkr ${product.price.toLocaleString()}`;
    }

    // Update size options
    const sizeSelect = detailsSection.querySelector("select");
    if (sizeSelect && product.sizes && Array.isArray(product.sizes)) {
      sizeSelect.innerHTML = "<option>Select Size</option>";
      product.sizes.forEach((size) => {
        const option = document.createElement("option");
        option.textContent = size;
        option.value = size;
        sizeSelect.appendChild(option);
      });
    }

    // Update description
    const description = detailsSection.querySelector("span");
    if (description) {
      description.textContent =
        product.description ||
        "High-quality fashion piece from Nayab. Comfortable fit with premium materials. Perfect for any occasion.";
    }
  }
}

// Set up image gallery functionality
function setupImageGallery() {
  const mainImg = document.getElementById("MainImg");
  const smallImgs = document.getElementsByClassName("small-img");

  if (mainImg && smallImgs.length > 0) {
    Array.from(smallImgs).forEach((img) => {
      img.addEventListener("click", function () {
        mainImg.src = this.src;
      });
    });
  }
}

// Set up add to cart functionality
function setupAddToCart(product) {
  const addToCartBtn = document.querySelector(
    ".single-pro-details button.normal"
  );
  const quantityInput = document.querySelector(
    ".single-pro-details input[type='number']"
  );

  if (addToCartBtn && quantityInput) {
    addToCartBtn.addEventListener("click", () => {
      const quantity = parseInt(quantityInput.value);

      if (isNaN(quantity) || quantity < 1) {
        alert("Please enter a valid quantity");
        return;
      }

      // Add to cart
      if (CartManager.addToCart(product.id, quantity)) {
        alert("Product added to cart!");
      } else {
        alert("Failed to add product to cart");
      }
    });
  }
}

// Load related products
function loadRelatedProducts(currentProduct) {
  // Get related products (same category, excluding current product)
  const relatedProducts = products.filter(
    (p) => p.category === currentProduct.category && p.id !== currentProduct.id
  );

  // If not enough related products, add some featured products
  let productsToShow = [...relatedProducts];

  if (productsToShow.length < 4) {
    const featuredProducts = products.filter(
      (p) =>
        (p.featured || p.category !== currentProduct.category) &&
        p.id !== currentProduct.id &&
        !productsToShow.includes(p)
    );

    // Add featured products until we have 4 or run out
    let i = 0;
    while (productsToShow.length < 4 && i < featuredProducts.length) {
      productsToShow.push(featuredProducts[i]);
      i++;
    }
  }

  // Render only 4 related products
  const productContainer = document.querySelector("#product1 .pro-container");
  if (productContainer && productsToShow.length > 0) {
    productContainer.innerHTML = productsToShow
      .slice(0, 4)
      .map(
        (product) => `
        <div class="pro" onclick="window.location.href='sproduct.html?id=${
          product.id
        }'">
          <img src="${product.mainImage || "img/products/f1.jpg"}" alt="${
          product.name
        }">
          <div class="des">
            <span>${product.brand || "Nayab"}</span>
            <h5>${product.name}</h5>
            <div class="star">
              ${generateStarRating(product.rating || 5)}
            </div>
            <h4>Pkr ${product.price}</h4>
          </div>
          <a href="#" class="cart-icon" data-id="${product.id}">
            <i class="fa-solid fa-cart-shopping cart"></i>
          </a>
        </div>
      `
      )
      .join("");
  }
}

// Helper function to generate star ratings HTML
function generateStarRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  let starsHtml = "";

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    starsHtml += '<i class="fa-solid fa-star"></i>';
  }

  // Add half star if needed
  if (hasHalfStar) {
    starsHtml += '<i class="fa-solid fa-star-half-stroke"></i>';
  }

  return starsHtml;
}
