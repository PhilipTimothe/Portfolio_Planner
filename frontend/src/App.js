import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CompanySearchContainer from'./containers/CompanySearchContainer';
import CompanyContainer from'./containers/CompanyContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={CompanySearchContainer}/>
        <Route exact path='/company' component={CompanyContainer}/>
      </Switch>
    </Router>
  );
}

export default App;
