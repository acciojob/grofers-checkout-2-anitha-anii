// Get the table element
const table = document.querySelector('table');

// Function to calculate and display the total price
function calculateTotalPrice() {
  // Get all the elements that store the prices
  const priceElements = table.querySelectorAll('[data-ns-test="price"]');

  let totalPrice = 0;

  // Calculate the sum of prices
  priceElements.forEach((element) => {
    const price = parseFloat(element.textContent);
    if (!isNaN(price)) {
      totalPrice += price;
    }
  });

  // Get the table footer row for displaying the total price
  const footerRow = table.querySelector('tfoot tr[data-ns-test="grandTotal"]');

  // Create a new cell for displaying the total price
  const totalCell = document.createElement('td');
  totalCell.setAttribute('colspan', '2');
  totalCell.textContent = 'Total Price: $' + totalPrice.toFixed(2);

  // Clear any existing content in the footer row
  footerRow.innerHTML = '';

  // Append the total price cell to the footer row
  footerRow.appendChild(totalCell);
}

// Call the calculateTotalPrice function initially
calculateTotalPrice();

// Example: Modify the price of an item dynamically
const milkPriceElement = document.querySelector('td[data-ns-test="price"]:nth-child(2)');
milkPriceElement.textContent = '4.5';

// Recalculate the total price after modifying the price
calculateTotalPrice();

