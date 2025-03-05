const products = [
  {
    id: 1,
    name: "Splash Print T-shirt",
    brand: "Nayab",
    price: 1200,
    rating: 5,
    category: "T-Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, itaque, corporis sapiente autem cumque nulla nisi tempora veritatis animi similique doloremque. Natus debitis ipsam consequatur deleniti ipsum officia odio explicabo!",
    images: [
      "../img/products/1.jpg",
      "../img/products/1.jpg",
      "../img/products/1.jpg",
      "../img/products/1.jpg",
    ],
    mainImage: "../img/products/1.jpg",
    sizes: ["XL", "XXL", "Small", "XS", "Medium", "Large"],
    featured: true,
    newArrival: false,
    stock: 20,
    colors: ["Red", "Blue", "Green"],
  },
  {
    id: 2,
    name: "Running Shoes",
    brand: "Nike",
    price: 3500,
    rating: 4.8,
    category: "Footwear",
    description:
      "Premium quality running shoes with extra cushioning and breathable fabric. Perfect for daily running and athletic activities.",
    images: [
      "../img/products/1.jpeg",
      "../img/products/1.jpeg",
      "../img/products/1.jpeg",
      "../img/products/1.jpeg",
    ],
    mainImage: "../img/products/1.jpeg",
    sizes: ["UK7", "UK8", "UK9", "UK10", "UK11"],
    featured: true,
    newArrival: false,
    stock: 15,
    colors: ["Black", "White", "Gray"],
  },
  {
    id: 3,
    name: "Casual Hoodie",
    brand: "Adidas",
    price: 2500,
    rating: 4.5,
    category: "Hoodie",
    description:
      "Comfortable casual hoodie made with premium cotton blend. Features kangaroo pocket and adjustable hood strings.",
    images: [
      "../img/products/2.jpg",
      "../img/products/2.jpg",
      "../img/products/2.jpg",
      "../img/products/2.jpg",
    ],
    mainImage: "../img/products/2.jpg",
    sizes: ["Small", "Medium", "Large", "XL", "XXL"],
    featured: true,
    newArrival: false,
    stock: 12,
    colors: ["Black", "Gray", "Navy Blue"],
  },
  {
    id: 4,
    name: "Sports Joggers",
    brand: "Puma",
    price: 3000,
    rating: 4.7,
    category: "Bottoms",
    description:
      "Lightweight sports joggers with moisture-wicking technology. Features elastic waistband with drawstring and zippered pockets.",
    images: [
      "../img/products/3.jpg",
      "../img/products/3.jpg",
      "../img/products/3.jpg",
      "../img/products/3.jpg",
    ],
    mainImage: "../img/products/3.jpg",
    sizes: ["Small", "Medium", "Large", "XL"],
    featured: true,
    newArrival: false,
    stock: 18,
    colors: ["Black", "Gray", "Navy Blue"],
  },
  {
    id: 5,
    name: "Denim Jacket",
    brand: "Levi's",
    price: 4500,
    rating: 4.9,
    category: "Outerwear",
    description:
      "Classic denim jacket with button closure. Features chest pockets and adjustable waist tabs for a perfect fit.",
    images: [
      "../img/products/4.jpg",
      "../img/products/4.jpg",
      "../img/products/4.jpg",
      "../img/products/4.jpg",
    ],
    mainImage: "../img/products/4.jpg",
    sizes: ["Small", "Medium", "Large", "XL"],
    featured: false,
    newArrival: true,
    stock: 10,
    colors: ["Blue", "Black", "Light Blue"],
  },
  {
    id: 6,
    name: "Summer Print T-shirt",
    brand: "Nayab",
    price: 1300,
    rating: 4.6,
    category: "T-Shirt",
    description:
      "Lightweight summer t-shirt with tropical print. Made with breathable cotton for maximum comfort in hot weather.",
    images: [
      "../img/products/7.jpg",
      "../img/products/7.jpg",
      "../img/products/7.jpg",
      "../img/products/7.jpg",
    ],
    mainImage: "../img/products/7.jpg",
    sizes: ["Small", "Medium", "Large", "XL"],
    featured: false,
    newArrival: true,
    stock: 22,
    colors: ["White", "Blue", "Yellow"],
  },
  {
    id: 7,
    name: "Graphic Print Hoodie",
    brand: "Nayab",
    price: 2200,
    rating: 4.7,
    category: "Hoodie",
    description:
      "Stylish hoodie with custom graphic print. Features soft inner lining and spacious front pocket.",
    images: [
      "../img/products/8.jpg",
      "../img/products/8.jpg",
      "../img/products/8.jpg",
      "../img/products/8.jpg",
    ],
    mainImage: "../img/products/8.jpg",
    sizes: ["Small", "Medium", "Large", "XL", "XXL"],
    featured: false,
    newArrival: true,
    stock: 15,
    colors: ["Black", "Gray", "White"],
  },
  {
    id: 8,
    name: "Cotton Chinos",
    brand: "Nayab",
    price: 1800,
    rating: 4.5,
    category: "Bottoms",
    description:
      "Comfortable cotton chinos perfect for casual and semi-formal occasions. Features straight fit and multiple pockets.",
    images: [
      "../img/products/6.jpg",
      "../img/products/6.jpg",
      "../img/products/6.jpg",
      "../img/products/6.jpg",
    ],
    mainImage: "../img/products/6.jpg",
    sizes: ["30", "32", "34", "36", "38"],
    featured: false,
    newArrival: true,
    stock: 18,
    colors: ["Khaki", "Navy", "Olive"],
  },
  {
    id: 9,
    name: "Cotton Shirt",
    brand: "Nayab",
    price: 1800,
    rating: 4.5,
    category: "Bottoms",
    description:
      "Comfortable cotton chinos perfect for casual and semi-formal occasions. Features straight fit and multiple pockets.",
    images: [
      "../img/products/9.jpg",
      "../img/products/9.jpg",
      "../img/products/9.jpg",
      "../img/products/9.jpg",
    ],
    mainImage: "../img/products/9.jpg",
    sizes: ["30", "32", "34", "36", "38"],
    featured: false,
    newArrival: true,
    stock: 18,
    colors: ["Khaki", "Navy", "Olive"],
  },
  {
    id: 10,
    name: "Cotton Shirt",
    brand: "Nayab",
    price: 1800,
    rating: 4.5,
    category: "Bottoms",
    description:
      "Comfortable cotton chinos perfect for casual and semi-formal occasions. Features straight fit and multiple pockets.",
    images: [
      "../img/products/10.jpg",
      "../img/products/10.jpg",
      "../img/products/10.jpg",
      "../img/products/10.jpg",
    ],
    mainImage: "../img/products/10.jpg",
    sizes: ["30", "32", "34", "36", "38"],
    featured: false,
    newArrival: true,
    stock: 18,
    colors: ["Khaki", "Navy", "Olive"],
  },
  {
    id: 11,
    name: "Cotton Shirt",
    brand: "Nayab",
    price: 1800,
    rating: 4.5,
    category: "Bottoms",
    description:
      "Comfortable cotton chinos perfect for casual and semi-formal occasions. Features straight fit and multiple pockets.",
    images: [
      "../img/products/10.jpg",
      "../img/products/10.jpg",
      "../img/products/10.jpg",
      "../img/products/10.jpg",
    ],
    mainImage: "../img/products/10.jpg",
    sizes: ["30", "32", "34", "36", "38"],
    featured: false,
    newArrival: true,
    stock: 18,
    colors: ["Khaki", "Navy", "Olive"],
  },
];

// Export the products array for use in other files
// if (typeof module !== "undefined" && module.exports) {
//   module.exports = products;
// }
