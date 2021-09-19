import logo from './logo.svg';
import './App.css';

function App() {
  const Nayok=['Rubel','Bapparaj','Shuvo','Riyaj','kuddus'];
  const Nayeka=['Mousumi','Shabnur','Popy','Purnima'];
  return (
    
    <div className="App">
<ul>
  {
    Nayok.map(Nayoks=><li>{Nayoks}</li>)
  }
</ul>

    <Person nayok={Nayok[0]} nayeka={Nayeka[0]}></Person>
        <Person nayok={Nayok[1]} nayeka={Nayeka[1]}></Person>
        <Person nayok={Nayok[2]} nayeka={Nayeka[2]}></Person>
        <Person nayok={Nayok[3]} nayeka={Nayeka[3]}></Person>
    </div>
  );
}

function Person(props){
  console.log(props);
const person={
backgroundColor:"chocolate",
border:"2px solid black",
borderRadius:"15px",
margin:"70px"

}
return(
  <div style={person}>
<h1>Name:{props.nayok}</h1>
<p>Nayeka name:{props.nayeka}</p>
</div>
);

}

export default App;

/* function Person(){
  const person={
  backgroundColor:"chocolate",
  border:"2px solid black",
  borderRadius:"15px",
  margin:"70px"
  
  }
  return(
   <div style={person}>
  <h1>Name:susan</h1>
  <p>Description:He is a boy</p>
  </div>
  );

  } */

      /* <Person nayok="Kabila" nayeka="Mousumi"></Person>
        <Person nayok="Bapparaj" nayeka="Sabnur"></Person>
        <Person nayok="Shuvo" nayeka="Popy"></Person>
        <Person nayok="Riyaj" nayeka="Purnima"></Person> 
    */