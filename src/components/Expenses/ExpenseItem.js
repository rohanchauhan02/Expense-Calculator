import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  const [title,setTitle]=useState(props.title);
  console.log("re-evaluate");
  const clickHandler = () => {
    setTitle("updated");
    console.log(title)
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      {/* do not use clickHandler() because it runs function during reading */}
    </Card>
  );
};

export default ExpenseItem;
