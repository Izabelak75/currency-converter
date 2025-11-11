
{
    const calculateResult = (amount, currency) => {
      const rateEUR = 4.29;
      const rateCAD = 2.65;
      const rateUSD = 3.73;

      switch (currency) {
        case "EUR":
          return amount / rateEUR;
        case "CAD":
          return amount / rateCAD;
        case "USD":
          return amount / rateUSD;
     
  }
};

 const updateResult = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `Wynik to: <strong>${result.toFixed(2)} ${currency}</strong>`
    }
    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const amount = +amountElement.value;
        const currency = currencyElement.value;

         const result = calculateResult(amount, currency);

        updateResult(result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}




