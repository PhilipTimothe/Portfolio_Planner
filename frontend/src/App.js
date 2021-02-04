import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CompanySearchContainer from './containers/CompanySearchContainer';
import CompanyContainer from "./containers/CompanyContainer";
import PortfolioContainer from "./containers/PortfolioContainer";
import { NavbarComponent } from './components/NavbarComponent'


function App() {
  return (
    <Router>
      <NavbarComponent />
      <Switch>
        <Route path="/" exact component={CompanySearchContainer} />
        <Route path="/company-overview/:id" exact component={CompanyContainer} />
        <Route path="/portfolio" exact component={PortfolioContainer} />
      </Switch>
    </Router>
  );
}

export default App;

// Router is not switching to linked page when action is taking place.