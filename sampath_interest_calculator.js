// Get the table and rows
const table = document.querySelector('#ac-history');
const rows = table.querySelectorAll('tbody tr');

// Calculate the total interest
let sum = 0;
rows.forEach((row) => {
  const txnCategoryCell = row.querySelector('td:last-child');
  const txnCategoryValue = txnCategoryCell.textContent.trim();
  if (txnCategoryValue === 'Interest Paid') {
    const creditCell = row.querySelector('.credit');
    const creditValue = parseFloat(creditCell.textContent);
    sum += creditValue;
  }
});
const totalSum = sum.toFixed(2).toString().split('.');

// Build the HTML string
const interestData = `
  <div class="status-label inner w-5 s-11 xs-11">
    <label>Total Interest Amount Paid from Bank</label>
    <div class="balance">
      <h2>${Number(totalSum[0]).toLocaleString()}.</h2>
      <h3>${totalSum[1] || '00'}</h3>
      <h4 class="currency">LKR</h4>
    </div>
    <span class="primary" >Showing ${document.getElementsByClassName("selected")[0].innerText} entries.</span>
    
  </div>
`; 

// Update the HTML element with the interest data
const accountInfoElement = document.getElementById('account-info');
accountInfoElement.innerHTML += interestData;

// Output the total interest to the console
console.log(`Your Total Interest is: ${sum}`);
