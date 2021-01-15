import Home from "./components/home"
import Dashboard from "./components/dashboard"
import { Divider } from "@material-ui/core";
import {
  BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


function App() {
return(
  <Router>
  <div className="header">
    <h1>Niko Calendar</h1>
  </div>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
  </Router>

)
}

export default App;
