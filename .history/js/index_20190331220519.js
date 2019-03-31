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
