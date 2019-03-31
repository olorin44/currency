// const urlCurrency = "https://api.nbp.pl/api/exchangerates/rates/a/";

// let currencyDataTableAll = [];

// const getCurrencyData = () => {
//   fetch(urlCurrency + "GBP")
//     .then(resp => resp.json())
//     .then(resp => {
//       let currencyDataGBP = {
//         id: 1,
//         code: resp.code,
//         name: resp.currency,
//         rate: resp.rates[0].mid,
//         date: resp.rates[0].effectiveDate
//       };
//       currencyDataTableAll.push(currencyDataGBP);
//     });
//   fetch(urlCurrency + "USD")
//     .then(resp => resp.json())
//     .then(resp => {
//       let currencyDataUSD = {
//         id: 2,
//         code: resp.code,
//         name: resp.currency,
//         rate: resp.rates[0].mid,
//         date: resp.rates[0].effectiveDate
//       };
//       currencyDataTableAll.push(currencyDataUSD);
//     });
//   fetch(urlCurrency + "EUR")
//     .then(resp => resp.json())
//     .then(resp => {
//       let currencyDataEUR = {
//         id: 3,
//         code: resp.code,
//         name: resp.currency,
//         rate: resp.rates[0].mid,
//         date: resp.rates[0].effectiveDate
//       };
//       currencyDataTableAll.push(currencyDataEUR);
//     });
//   fetch(urlCurrency + "CHF")
//     .then(resp => resp.json())
//     .then(resp => {
//       let currencyDataCHF = {
//         id: 4,
//         code: resp.code,
//         name: resp.currency,
//         rate: resp.rates[0].mid,
//         date: resp.rates[0].effectiveDate
//       };
//       currencyDataTableAll.push(currencyDataCHF);
//     });
// };

// window.onload = getCurrencyData();

// const Cash = props => {
//   const value = (props.cash / props.rate).toFixed(2);
//   return (
//     <div>
//       {props.cash} {"PLN You can exchange for:"} {props.cash <= 0 ? "" : value}{" "}
//       {props.code} {", actual exchange rate is:"} {props.rate} {", dated on:"}{" "}
//       {props.date}
//     </div>
//   );
// };

// class CurrencyCheck extends React.Component {
//   state = {
//     amount: "",
//     currencyChosen: "GBP"
//   };

//   handleChange = event => {
//     this.setState({
//       amount: event.target.value
//     });
//   };

//   handleSelect = event => {
//     this.setState({
//       currencyChosen: event.target.value
//     });
//   };

//   render() {
//     const { amount, currencyChosen } = this.state;
//     const calculators = currencyDataTableAll.map(currency => (
//       <Cash
//         key={currency.id}
//         code={currency.code}
//         rate={currency.rate}
//         name={currency.name}
//         cash={amount}
//         date={currency.date}
//       />
//     ));
//     return (
//       <div className="app">
//         <label>
//           Choose currency
//           <select value={currencyChosen} onChange={this.handleSelect}>
//             <option value="GBP">GBP</option>
//             <option value="USD">USD</option>
//             <option value="EUR">EUR</option>
//             <option value="CHF">CHF</option>
//           </select>
//         </label>
//         <br />
//         <label>
//           <input
//             type="number"
//             value={this.state.amount}
//             onChange={this.handleChange}
//             placeholder="type a number in PLN"
//           />
//         </label>
//         {calculators}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<CurrencyCheck />, document.getElementById("root"));

/////////////////////////////////////////////////////////////////////////////////////

class CurrencyExchange extends React.Component {
  state = {
    currencies: [],
    rates: [],
    amount: 1,
    currency: "USD",
    secondCurrency: "EUR"
  };

  // componentDidMount() {
  //   this.getCurrencyData(this.state.currency);
  // }

  // window.onload = getCurrencyData(); //???

  getCurrencyData = base => {
    const urlApi = `https://api.exchangeratesapi.io/latest?base=${base}`;

    fetch(urlApi)
      .then(resp => {
        return resp.json();
      })
      .then(resp =>
        this.setState({
          rates: resp["rates"],
          currencies: Object.keys(resp["rates"]).sort()
          // currencies: Object.keys(data["rates"]) //moje
        })
      );
    console.log("dupa: ", getCurrencyData);
  };

  changeAmount = event => {
    this.setState({
      amount: event.target.value
    });
  };

  changeCurrency = event => {
    this.setState({ currency: event.target.value });
    this.getCurrencyData(event.target.value);
    // this.getCurrencyData(currency); //moje
  };

  changeSecondCurrency = event => {
    this.setState({ secondCurrency: event.target.value });
    // this.getCurrencyData(secondCurrency); //skasowane?
  };

  currencyConvert = (amount, rates, secondCurrency) => {
    return Number.parseFloat(amount * rates[secondCurrency]).toFixed(2);
  };

  dupa = document.getElementById("dupa");
  console.log(dupa)

  render() {
    const { amount, rates, currency, currencies, secondCurrency } = this.state;
    const currencyOption = currencies.map(currency => (
      <option key={currency} value={currency}>
        {currency}
      </option>
    ));

    const displayScore = this.currencyConvert(amount, rates, secondCurrency);

    return (
      <div className="app">
        <div className="container">
          <button id="dupa">dupa</button>
          <label>
            base currency is: {currency}
            <select value={currency} onChange={this.changeCurrency}>
              {currencyOption}
              <option>{currency}</option>
            </select>
          </label>
          <label>
            second currency is: {secondCurrency}
            <select value={secondCurrency} onChange={this.changeSecondCurrency}>
              {currencyOption}
              <option>{secondCurrency}</option>
            </select>
          </label>
          <label>
            type amount
            <input type="number" value={amount} onChange={this.changeAmount} />
          </label>
          <p className="exchange-info">
            {amount} {currency} = {displayScore} {secondCurrency}
          </p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<CurrencyExchange />, document.getElementById("root"));
