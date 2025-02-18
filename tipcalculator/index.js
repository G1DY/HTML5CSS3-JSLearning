const billAmtEl = document.getElementById("billAmount");
const tipPercentageEl = document.getElementById("tipPercentage");
const calculateEl = document.getElementById("calculate");
const totalEl = document.getElementById("total");

const calculateTotal = () => {
  const billValue = billAmtEl.value;
  const tipPercentageValue = tipPercentageEl.value;
  const totalValue = billValue * (1 + tipPercentageValue / 100);
  totalEl.innerText = totalValue.toFixed(2);
};
calculateEl.addEventListener("click", calculateTotal);
