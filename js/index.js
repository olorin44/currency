const urlCurrencyTableA =
  "https://api.nbp.pl/api/exchangerates/tables/a/?format=json";
const urlCurrencyTableB =
  "https://api.nbp.pl/api/exchangerates/tables/b/?format=json";

let currencyDataTableAll = [];
let currencyTableA = [];
let currencyTableB = [];
const getCurrencyData = () => {
  fetch(urlCurrencyTableA)
    .then(resp => resp.json())
    .then(resp => {
      currencyTableA = resp;
      console.log(currencyTableA);
    });
  fetch(urlCurrencyTableB)
    .then(resp => resp.json())
    .then(resp => {
      currencyTableB = resp;
      console.log(currencyTableB);
    });
};

currencyDataTableAll.concat(currencyTableA, currencyTableB);
// console.log(currencyDataTableAll);
// console.log(currencyTableA);
// console.log(currencyTableB);

const getDataBtn = document.getElementById("button");
getDataBtn.addEventListener("click", getCurrencyData);

class CurrencyCheck extends React.Component {
  state = {
    amount: ""
  };

  handleChange = event => {
    this.setState({
      amount: event.target.value
    });
  };

  render() {
    return (
      <div className="app">
        <label>
          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}

ReactDOM.render(<CurrencyCheck />, document.getElementById("root"));
