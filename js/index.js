const urlCurrencyTableA =
  "https://api.nbp.pl/api/exchangerates/tables/a/?format=json";
const urlCurrencyTableB =
  "https://api.nbp.pl/api/exchangerates/tables/b/?format=json";

/////////////////////////////////////////////////////////////////////////////
let currencyDataTableAll = [];
let currencyTableA;
let currencyTableB;
const getCurrencyData = () => {
  fetch(urlCurrencyTableA)
    .then(resp => resp.json())
    .then(resp => {
      currencyTableA = resp;
      currencyDataTableAll.push(currencyTableA);
      //   console.log(currencyTableA);
    });
  fetch(urlCurrencyTableB)
    .then(resp => resp.json())
    .then(resp => {
      currencyTableB = resp;
      currencyDataTableAll.push(currencyTableB);
      //   console.log(currencyTableB);
      //   console.log(currencyDataTableAll);
    });
};

console.log(currencyDataTableAll);

// getCurrencyData();

// let dupa = currencyTableA;
// let kutas = currencyTableB;
// console.log(currencyDataTableAll);
// console.log(dupa);
// console.log(currencyTableB);

////////////////////////////////////////////////////////////////////////////////////////

const Cash = props => {
  const value = (props.cash / props.ratio).toFixed(2);
  return (
    <div>
      {props.title} {props.cash <= 0 ? "" : value}
    </div>
  );
};

class CurrencyCheck extends React.Component {
  state = {
    amount: ""
  };

  currencies = [
    {
      id: 1,
      name: "numerek 1: ",
      ratio: 2.5,
      title: "wartość nr 1: "
    },
    {
      id: 2,
      name: "numerek 2",
      ratio: 4.5,
      title: "wartość nr 2: "
    },
    {
      id: 3,
      name: "numerek 3",
      ratio: 1.7,
      title: "wartość nr 3: "
    },
    {
      id: 4,
      name: "numerek 4",
      ratio: 3.8,
      title: "wartość nr 4: "
    }
  ];

  handleChange = event => {
    this.setState({
      amount: event.target.value
    });
  };

  render() {
    const { amount } = this.state;

    const calculators = this.currencies.map(currency => (
      <Cash
        key={currency.id}
        ratio={currency.ratio}
        title={currency.title}
        cash={amount}
      />
    ));
    return (
      <div className="app">
        <button onClick={getCurrencyData}>button</button>
        <label>
          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleChange}
          />
        </label>
        {calculators}
      </div>
    );
  }
}

ReactDOM.render(<CurrencyCheck />, document.getElementById("root"));
