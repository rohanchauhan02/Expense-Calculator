import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
//   const [userInput, setUserInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });
  const titleChanngeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredTitle: event.target.value};
    // });
  };
  const amountChanngeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredAmount: event.target.value};
    // });
  };
  const dateChanngeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredDate: event.target.value};
    // });
  };
  return (
    <form>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <lebel>Title</lebel>
          <input type="text" onChange={titleChanngeHandler} />
        </div>
        <div className="new-expense__control">
          <lebel>Amount</lebel>
          <input
            type="number"
            min="10"
            step="0.01"
            onChange={amountChanngeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <lebel>Date</lebel>
          <input
            type="date"
            min="2012-01-01"
            max="2022-01-01"
            onChange={dateChanngeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
