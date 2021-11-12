document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("converter-input");
  const select = document.getElementById("select");
  const result = document.getElementById("converter-curency");

  const convert = document
    .getElementById("converter-button")
    .addEventListener("click", () => {
      const calculate = () => {
        fetch(`https://api.nbp.pl/api/exchangerates/rates/A/${select.value}/`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            const val = data.rates[0].mid;

            const finalValue = input.value * val;
            result.textContent = finalValue.toFixed(2);
          });
      };
      calculate();
    });
});
