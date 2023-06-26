    function calculateTotal() {
  var prices = document.querySelectorAll('[data-ns-test="price"]');
  var total = 0;

  for (var i = 0; i < prices.length; i++) {
    total += parseFloat(prices[i].textContent);
  }

  var table = document.querySelector('[data-ns-test="grandTotal"]');
  var newRow = document.createElement('tr');
  var newCell = document.createElement('td');

  newCell.colSpan = 2;
  newCell.textContent = 'Total Price: ' + total.toFixed(2);
  newRow.appendChild(newCell);
  table.appendChild(newRow);
}

calculateTotal();
