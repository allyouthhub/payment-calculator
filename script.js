function calculatePayment() {
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value) / 100 / 12;
  const years = parseFloat(document.getElementById("years").value);
  const months = years * 12;

  if (isNaN(principal) || isNaN(rate) || isNaN(years) || principal <= 0 || rate <= 0 || years <= 0) {
    document.getElementById("result").innerText = "Please enter valid values.";
    return;
  }

  const x = Math.pow(1 + rate, months);
  const monthlyPayment = (principal * rate * x) / (x - 1);
  const roundedPayment = monthlyPayment.toFixed(2);

  document.getElementById("result").innerText = `Monthly Payment: ₹${roundedPayment}`;
}
