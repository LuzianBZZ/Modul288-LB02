function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  if (amount === "") {
    alert("Sie müssen einen Betrag eingeben um ihn umrechnen zu können!");
    return;
  }

  fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
    .then(response => response.json())
    .then(data => {
      const exchangeRate = data.rates[to];

      const result = (amount * exchangeRate).toFixed(2);

      document.getElementById("result").innerHTML = `${amount} ${from} = ${result} ${to}`;
    })
    .catch(error => console.log(error));
}