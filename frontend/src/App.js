import './App.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CompanySearchContainer from './containers/CompanySearchContainer';
// import CompanyContainer from "./containers/CompanyContainer";

function App() {
  return (
      <div>
        <CompanySearchContainer />
      </div>
    // <Router>
    //   <Switch>
    //     <Route path="/" exact component={CompanySearchContainer} />
    //     <Route path="/companyOverview/:id" exact component={CompanyContainer} />
    //   </Switch>
    // </Router>
  );
}

export default App;
