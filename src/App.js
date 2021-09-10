import React from "react";
import "./App.css";
import Expense from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expense = [
    {
      id: "01",
      title: "car",
      amount: 23.4,
      date: new Date(2021, 2, 14),
    },
    {
      id: "02",
      title: "Book",
      amount: 34.5,
      date: new Date(2021, 3, 16),
    },
    {
      id: "03",
      title: "Phone",
      amount: 200.8,
      date: new Date(2021, 1, 10),
    },
    {
      id: "04",
      title: "Bike",
      amount: 400,
      date: new Date(2020, 5, 23),
    },
  ];
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expense, { items: expense })
  // );
  //alternative

  return (
    <div className="App">
      <NewExpense/>
      <Expense items={expense}/>
    </div>
  );
}

export default App;
