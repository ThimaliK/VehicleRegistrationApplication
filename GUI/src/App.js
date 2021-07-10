import logo from './logo.svg';
import './App.css';
import Menu from './Menu'
import View  from './View'
import Edit from './Edit'
import Delete from './Delete'
import Register from './Register'
import { BrowserRouter as Router, Route, Switch, Link } from  'react-router-dom'

function App() {
  return (
    <Router>

      <div  style={{textAlign: "center"}} className="App">
        <h1> Vehicle Registration App </h1>
      </div>

        <div style={{textAlign: "center"}}>
        <Link className="menuLink" to="/register"><button className="menuButton">  Register New Vehicle </button>  </Link>
        <Link className="menuLink"to="/view"> <button className="menuButton">  View Registered Vehicles  </button> </Link>
        <Link className="menuLink"to="/edit"> <button className="menuButton">  Edit registered Vehicle </button></Link>
        <Link className="menuLink" to="/delete"><button className="menuButton">  Delete registered Vehicle  </button></Link><br/> <br/> 
        </div>

      <Switch>

        <Route path="/register">
          <Register></Register>
        </Route>

        <Route path="/view">
          <View></View>
        </Route> 

        <Route path="/edit">
          <Edit></Edit>
        </Route> 

        <Route path="/delete">
          <Delete></Delete>
        </Route> 

      </Switch>

    </Router>
  )
}

export default App;
