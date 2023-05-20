import './Card.css';
function Card (props) {

 
return(


  <div>
  
       <div  className="Card">
          <h1>  {props.country} </h1>
          <h1> {props.state} </h1>
          <h1> {props.city} </h1>
          <h1> {props.area} </h1>
          <h1> {props.street} </h1>
          <h1> {props.Owner} </h1>
       
       
       
       </div>
  
  
  </div>
);
}

export default Card;