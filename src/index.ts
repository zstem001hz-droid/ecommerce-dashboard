import {
  fetchProductCatalog,
  fetchProductReviews,
  fetchSalesReport,
} from "./apiSimulator.js";

fetchProductCatalog()
  .then((products) => {
    console.log("Products:", products);
    //loop through each product and fetch reviews
    for (const product of products) {
      fetchProductReviews(product.id)
        .then((reviews) => {
          console.log(`Reviews for ${product.name}:`, reviews);
        })
        .catch((error) => console.error("Error:", error));
    }
  })
  .then(() => {
    return fetchSalesReport();
  })
  .then((report) => {
    console.log("Sales Report:", report);
  })
  .catch((error) => console.error("Error:", error))
  .finally(() => {
    console.log("All API calls have been attempted.");
  });