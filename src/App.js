import Expenses from './components/Expenses'; 



function App(){
  let arrExpenses = [
{
    id : 'e1',
    title : 'school fee',
    amount : 300 ,
    date : new Date (2023, 5 ,16)
},

{
  id : 'e2',
  title : 'uniform',
  amount : 700 ,
  date : new Date (2023, 5 ,20)
},

{
  id : 'e3',
  title : 'books',
  amount : 500 ,
  date : new Date (2023, 5 ,26)
},

{
  id : 'e4',
  title : 'school bus',
  amount : 3000 ,
  date : new Date (2023, 7 ,2)
}

  ];



  let Fruit = [
{
fname : "orange",
amount : 500,
},
 {
  fname : "apple",
amount : 300,
},

 {
 fname : "grapes",
amount : 1000,
},
      ];


  const name ="siddhi";
  
  return(
    <div>
    
         <Expenses item = {arrExpenses} itemName = {name} />
         
          </div>
  );
}
export default App;