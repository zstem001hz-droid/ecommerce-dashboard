// Fetches a list of products with id, name, and price
export const fetchProductCatalog = (): Promise<
  { id: number; name: string; price: number }[]
> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([
          { id: 1, name: "Laptop", price: 1500 },
          { id: 2, name: "Headphones", price: 199 },
          { id: 3, name: "Wireless Mechanical Keyboard", price: 150 },
          { id: 4, name: "Mouse", price: 89 },
          { id: 5, name: "Docking Station", price: 175 },
          { id: 6, name: '34" Monitor', price: 365 },
        ]);
      } else {
        reject("Failed to fetch product catalog");
      }
    }, 1000);
  });
};

// Fetches reviews for a specific product by productId
export const fetchProductReviews = (
  productId: number,
): Promise<
  { id: number; productId: number; review: string; rating: number }[]
> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([
          {
            id: 1,
            productId: productId,
            review: "Worth every penny!",
            rating: 5,
          },
          {
            id: 2,
            productId: productId,
            review: "Exceeds expectations",
            rating: 4,
          },
          { id: 3, productId: productId, review: "Great product!", rating: 3 },
          {
            id: 4,
            productId: productId,
            review: "Good value, not the best product",
            rating: 2,
          },
          {
            id: 5,
            productId: productId,
            review: "Wish I would have went with a better option",
            rating: 1,
          },
        ]);
      } else {
        reject(`Reviews for Product ID: ${productId} failed to load`);
      }
    }, 1500);
  });
};

// Fetches a sales report with totalSales, unitsSold, and averagePrice
export const fetchSalesReport = (): Promise<{
  totalSales: number;
  unitsSold: number;
  averagePrice: number;
}> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve({
          totalSales: 50000,
          unitsSold: 150,
          averagePrice: 333.33,
        });
      } else {
        reject("Failed to fetch sales report");
      }
    }, 1000);
  });
};

// CONSOLE LOG TESTING //

// //Test fetchProductCatalog
// fetchProductCatalog()
//   .then((products) => console.log("Products:", products))
//   .catch((error) => console.error("Error:", error));

// // Test fetchProductReviews
// fetchProductReviews(1)
//   .then((reviews) => console.log("Reviews:", reviews))
//   .catch((error) => console.error("Error:", error));

// // Test fetchSalesReport
// fetchSalesReport()
//   .then((report) => console.log("Sales report:", report))
//   .catch((error) => console.error("Error:", error));
