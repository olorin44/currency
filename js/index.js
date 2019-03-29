// const urlCurrency = "https://api.nbp.pl/api/exchangerates/rates/a/";
// let currencyDataTableAll = [];
// const getCurrencyData = () => {
//   fetch(urlCurrency + "GBP")
//     .then(resp => resp.json())
//     .then(resp => {
//       let currencyDataGBP = {
//         code: resp.code,
//         name: resp.currency,
//         rate: resp.rates[0].mid
//       };
//       currencyDataTableAll.push(currencyDataGBP);
//     });
//   fetch(urlCurrency + "USD")
//     .then(resp => resp.json())
//     .then(resp => {
//       let currencyDataUSD = {
//         code: resp.code,
//         name: resp.currency,
//         rate: resp.rates[0].mid
//       };
//       currencyDataTableAll.push(currencyDataUSD);
//     });
//   fetch(urlCurrency + "EUR")
//     .then(resp => resp.json())
//     .then(resp => {
//       let currencyDataEUR = {
//         code: resp.code,
//         name: resp.currency,
//         rate: resp.rates[0].mid
//       };
//       currencyDataTableAll.push(currencyDataEUR);
//     });
//   fetch(urlCurrency + "CHF")
//     .then(resp => resp.json())
//     .then(resp => {
//       let currencyDataCHF = {
//         code: resp.code,
//         name: resp.currency,
//         rate: resp.rates[0].mid,
//         date: resp.rates[0].effectiveDate
//       };
//       currencyDataTableAll.push(currencyDataCHF);
//     });
// };

// window.onload = getCurrencyData();

// const dupa = () => {
//   console.log(currencyDataTableAll);
// };

// const Cash = props => {
//   const value = (props.cash / props.ratio).toFixed(2);
//   return (
//     <div>
//       {props.title} {props.cash <= 0 ? "" : value}
//     </div>
//   );
// };

// class CurrencyCheck extends React.Component {
//   state = {
//     amount: ""
//   };

//   currencies = [
//     {
//       id: 1,
//       name: "numerek 1: ",
//       ratio: 2.5,
//       title: "chuj"
//     },
//     {
//       id: 2,
//       name: "numerek 2",
//       ratio: 4.5,
//       title: "wartość nr 2: "
//     },
//     {
//       id: 3,
//       name: "numerek 3",
//       ratio: 1.7,
//       title: "wartość nr 3: "
//     },
//     {
//       id: 4,
//       name: "numerek 4",
//       ratio: 3.8,
//       title: "wartość nr 4: "
//     }
//   ];

//   handleChange = event => {
//     this.setState({
//       amount: event.target.value
//     });
//   };

//   render() {
//     const { amount } = this.state;

//     const calculators = this.currencies.map(currency => (
//       <Cash
//         key={currency.id}
//         ratio={currency.ratio}
//         title={currency.title}
//         cash={amount}
//       />
//     ));
//     return (
//       <div className="app">
//         <button onClick={dupa}>dupa</button>
//         <label>
//           <input
//             type="number"
//             value={this.state.amount}
//             onChange={this.handleChange}
//           />
//         </label>
//         {calculators}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<CurrencyCheck />, document.getElementById("root"));

//////////////////////////////////////////////////////////////////////////////////////

// const urlCurrency = "https://api.nbp.pl/api/exchangerates/rates/a/";

// // window.onload = getCurrencyData();

// const Cash = props => {
//   const value = (props.cash / props.rate).toFixed(2);
//   return (
//     <div>
//       {props.code} {props.cash <= 0 ? "" : value}
//     </div>
//   );
// };

// class CurrencyCheck extends React.Component {
//   state = {
//     amount: ""
//   };

//   currencyDataTableAll = [];

//   getCurrencyData = () => {
//     fetch(urlCurrency + "GBP")
//       .then(resp => resp.json())
//       .then(resp => {
//         let currencyDataGBP = {
//           id: 1,
//           code: resp.code,
//           name: resp.currency,
//           rate: resp.rates[0].mid
//         };
//         this.currencyDataTableAll.push(currencyDataGBP);
//       });
//     fetch(urlCurrency + "USD")
//       .then(resp => resp.json())
//       .then(resp => {
//         let currencyDataUSD = {
//           id: 2,
//           code: resp.code,
//           name: resp.currency,
//           rate: resp.rates[0].mid
//         };
//         this.currencyDataTableAll.push(currencyDataUSD);
//       });
//     fetch(urlCurrency + "EUR")
//       .then(resp => resp.json())
//       .then(resp => {
//         let currencyDataEUR = {
//           id: 3,
//           code: resp.code,
//           name: resp.currency,
//           rate: resp.rates[0].mid
//         };
//         this.currencyDataTableAll.push(currencyDataEUR);
//       });
//     fetch(urlCurrency + "CHF")
//       .then(resp => resp.json())
//       .then(resp => {
//         let currencyDataCHF = {
//           id: 4,
//           code: resp.code,
//           name: resp.currency,
//           rate: resp.rates[0].mid,
//           date: resp.rates[0].effectiveDate
//         };
//         this.currencyDataTableAll.push(currencyDataCHF);
//       });
//   };

//   handleChange = event => {
//     this.setState({
//       amount: event.target.value
//     });
//   };

//   render() {
//     const { amount } = this.state;
//     const calculators = this.currencyDataTableAll.map(currency => (
//       <Cash
//         key={currency.id}
//         code={currency.code}
//         rate={currency.rate}
//         name={currency.name}
//         cash={amount}
//       />
//     ));
//     return (
//       <div className="app">
//         {/* {(window.onload = this.getCurrencyData())} */}
//         <button onClick={this.getCurrencyData}>getCurrencyData</button>
//         <label>
//           <input
//             type="number"
//             value={this.state.amount}
//             onChange={this.handleChange}
//           />
//         </label>
//         {calculators}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<CurrencyCheck />, document.getElementById("root"));

//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

const urlCurrency = "https://api.nbp.pl/api/exchangerates/rates/a/";

let currencyDataTableAll = [];

const getCurrencyData = () => {
  fetch(urlCurrency + "GBP")
    .then(resp => resp.json())
    .then(resp => {
      let currencyDataGBP = {
        id: 1,
        code: resp.code,
        name: resp.currency,
        rate: resp.rates[0].mid
      };
      currencyDataTableAll.push(currencyDataGBP);
    });
  fetch(urlCurrency + "USD")
    .then(resp => resp.json())
    .then(resp => {
      let currencyDataUSD = {
        id: 2,
        code: resp.code,
        name: resp.currency,
        rate: resp.rates[0].mid
      };
      currencyDataTableAll.push(currencyDataUSD);
    });
  fetch(urlCurrency + "EUR")
    .then(resp => resp.json())
    .then(resp => {
      let currencyDataEUR = {
        id: 3,
        code: resp.code,
        name: resp.currency,
        rate: resp.rates[0].mid
      };
      currencyDataTableAll.push(currencyDataEUR);
    });
  fetch(urlCurrency + "CHF")
    .then(resp => resp.json())
    .then(resp => {
      let currencyDataCHF = {
        id: 4,
        code: resp.code,
        name: resp.currency,
        rate: resp.rates[0].mid,
        date: resp.rates[0].effectiveDate
      };
      currencyDataTableAll.push(currencyDataCHF);
    });
};

window.onload = getCurrencyData();

const Cash = props => {
  const value = (props.cash / props.rate).toFixed(2);
  return (
    <div>
      {props.cash} {"PLN You can exchange for:"} {props.cash <= 0 ? "" : value}{" "}
      {props.code}
    </div>
  );
};

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
    const { amount } = this.state;
    const calculators = currencyDataTableAll.map(currency => (
      <Cash
        key={currency.id}
        code={currency.code}
        rate={currency.rate}
        name={currency.name}
        cash={amount}
      />
    ));
    return (
      <div className="app">
        {/* {(window.onload = this.getCurrencyData())} */}
        <button onClick={this.getCurrencyData}>getCurrencyData</button>
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
