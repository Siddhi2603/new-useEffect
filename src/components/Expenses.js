import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props){
  console.log("1257:::",props.item)
  console.log("1295:::",props.itemName)

return(
<div className="expenses ">
<ExpenseItem 
date={props.item[0].date}
title={props.item[0].title}
amount={props.item[0].amount}/>


<ExpenseItem  
      date={props.item[1].Date}
      title={props.item[1].Title}
      amount={props.item[1].Amount}/>


<ExpenseItem 
      date={props.item[2].date}
      title={props.item[2].Title}
      amount={props.item[2].Amount}/>


<ExpenseItem 
      date={props.item[3 ].date}
      title={props.item[3].Title}
      amount={props.item[3].Amount}/>

</div>
);

}

export default Expenses;