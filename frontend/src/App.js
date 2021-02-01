import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CompanySearchContainer from './containers/CompanySearchContainer';
import CompanyContainer from "./containers/CompanyContainer";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
      // <div>
      //   <Navbar fixed="top" bg="dark" variant="dark">
      //     <Navbar.Brand href="#home">Portfolio Planner</Navbar.Brand>
      //     <Nav className="mr-auto"></Nav>
      //     <Button variant="outline-info" className="mr-sm-2">Home</Button> 
      //     <Button variant="outline-info" className="mr-sm-2">Portfolio</Button>
      //   </Navbar>
      //   <br />
      //   <br/>
      //   <CompanySearchContainer />
      // </div>
    <Router>
      <Switch>
        <Route path="/" exact component={CompanySearchContainer} />
        <Route path="/company-overview/:id" exact component={CompanyContainer} />
      </Switch>
    </Router>
  );
}

export default App;

// Router is not switching to linked page when action is taking place.