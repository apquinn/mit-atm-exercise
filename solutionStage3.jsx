const ATMDeposit = ({ onChange, isDeposit }) => {
  const choice = ["Deposit", "Cash Back"];
  return (
    <label className="label huge">
      <h3> {choice[Number(!isDeposit)]}</h3>
      <input type="number" width="200" onChange={onChange}></input>
      <input type="submit" width="200" value="Submit"></input>
      <span id="errorMsg"></span>
    </label>
  );
};

const Account = () => {
  const [deposit, setDeposit] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);

  let status = `Account Balance $ ${totalState} `;
  const handleChange = (event) => {
    setDeposit(Number(event.target.value));
  };
  const handleSubmit = (event) => {
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    if (!isDeposit && newTotal < 0)
      document.getElementById("errorMsg").innerHTML = "not enough dough";
    else {
      document.getElementById("errorMsg").innerHTML = "";
      setTotalState(newTotal);
    }
    event.preventDefault();
  };

  const test = (event) => {
    event.target.innerHTML == "Deposit"
      ? setIsDeposit(true)
      : setIsDeposit(false);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <button onClick={test}>Deposit</button>
      <button onClick={test}>Cash Back</button>
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
