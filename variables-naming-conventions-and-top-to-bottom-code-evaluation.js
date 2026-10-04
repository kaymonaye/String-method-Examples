/ / Descriptive variable names and enhancements
const buyerName = "Alice";
const quantityPurchased = 5;
const unitPrice = 20;
const currencySymbol = "$";

// Derived value for clarity and reuse
const totalCost = quantityPurchased * unitPrice;

// Formatted message
const purchaseMessage = `${buyerName} bought ${quantityPurchased} items for ${currencySymbol}${totalCost}.`;

console.log(purchaseMessage);
