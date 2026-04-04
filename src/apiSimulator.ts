// Fetches a list of products with id, name, and price
export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve([
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Headphones", price: 200 },
        ]);
        } else {
        reject("Failed to fetch product catalog");
        }
    }, 1000);
    });
};

// Fetches reviews for a specific product by productId
export const fetchProductReviews = (productId: number): Promise<{ id: number; productId: number; review: String; rating: number }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, productId: productId, review: "Great product!", rating: 5 },
                    { id: 2, productId: productId, review: "Good value.", rating: 4 },
                ]);
            } else {
                reject(`Reviews for Product ID: ${productId} failed to load`);
            }
            }, 1500);
        });
    };

// Fetches a sales report with totalSales, unitsSold, and averagePrice
export const fetchSalesReport = (): Promise<{ totalSales: number; unitsSold: number; averagePrice: number }> => {
};