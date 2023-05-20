import React from 'react';
import'./ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
const ExpenseItem =(props)=> {
 const OwnerName = "desai"


return(
 
  <div>

  <Card Country = {"usa"} 
  State = {"maharashtra"} City = {"nagpur"} area = {"WARJE"} 
   street = {"tapodham"} pincode = {440024} Owner = {OwnerName}/>
  

  </div>
);

}

export default ExpenseItem;
