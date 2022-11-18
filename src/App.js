import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import action from "../src/redux/actions/actions";


function App() {
  
  
  const {reduxAction,decCounter}=action

  const dispatch = useDispatch();
  
  // useEffect(()=>{
let numero=useSelector(state=>state.counter.value)

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={() => {
            dispatch(reduxAction());
          }}
        >
          +
        </button>
        <p>Contador : {numero}</p>
        <button onClick={
          ()=>{
            dispatch(decCounter())
          }
        }>
          -
        </button>
      </header>
    </div>
  );
}

export default App;
