class CurrencyExchange extends React.Component {
  state = {
    currencies: [],
    rates: [],
    amount: 1,
    currency: "USD",
    secondCurrency: "EUR"
  };

  getCurrencyData = currency => {
    const urlApi = `https://api.exchangeratesapi.io/latest?base=${currency}`;

    fetch(urlApi)
      .then(resp => {
        return resp.json();
      })
      .then(resp =>
        this.setState({
          rates: resp["rates"],
          currencies: Object.keys(resp["rates"]).sort()
        })
      );
  };

  changeAmount = event => {
    this.setState({
      amount: event.target.value
    });
  };

  changeCurrency = event => {
    this.setState({ currency: event.target.value });
    this.getCurrencyData(event.target.value);
  };

  changeSecondCurrency = event => {
    this.setState({ secondCurrency: event.target.value });
  };

  currencyConvert = (amount, rates, secondCurrency) => {
    return Number.parseFloat(amount * rates[secondCurrency]).toFixed(2);
  };

  componentDidMount() {
    this.getCurrencyData(this.state.currency);
  }

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
          <h2>App to convert currencies</h2>
          <p>API used for currencies rates: https://exchangeratesapi.io/</p>
          <p>
            Exchange rates API is a free service for current and historical
            foreign exchange rates published by the
          </p>
          <a href="https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html">
            European Central Bank
          </a>
          <br />
          <label>
            base currency is:
            <select value={currency} onChange={this.changeCurrency}>
              {currencyOption}
              <option>{currency}</option>
            </select>
          </label>
          <label>
            second currency is:
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
