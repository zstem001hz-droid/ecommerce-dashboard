import { NetworkError, DataError } from "./errors.js";

import {
  fetchProductCatalog,
  fetchProductReviews,
  fetchSalesReport,
} from "./apiSimulator.js";

fetchProductCatalog()
  .then((products) => {
    console.log("=== Product Catalog ===");
    products.forEach((product) => {
      console.log(`Product ${product.id}: ${product.name} - $${product.price}`);
    });
    //loop through each product and fetch reviews
    for (const product of products) {
      fetchProductReviews(product.id)
        .then((reviews) => {
          console.log(`=== Reviews for ${product.name} ===`);
          reviews.forEach((review) => {
            console.log(`  Rating: ${review.rating}/5 - "${review.review}"`);
          });
        })
        .catch((error) => {
          if (error instanceof NetworkError) {
            console.error("Network Error:", error.message);
          } else if (error instanceof DataError) {
            console.error("Data Error:", error.message);
          } else {
            console.error("Unknown Error:", error);
          }
        });
    }
  })
  .then(() => {
    return fetchSalesReport();
  })
  .then((report) => {
    console.log("=== Sales Report ===");
    console.log(`Total Sales: $${report.totalSales}`);
    console.log(`Units Sold: ${report.unitsSold}`);
    console.log(`Average Price: $${report.averagePrice}`);
  })
  .catch((error) => {
    if (error instanceof NetworkError) {
      console.error("Network Error:", error.message);
    } else if (error instanceof DataError) {
      console.error("Data Error:", error.message);
    } else {
      console.error("Unknown Error:", error);
    }
  })
  .finally(() => {
    console.log("All API calls have been attempted.");
  });
