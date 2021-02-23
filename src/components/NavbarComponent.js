import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export function NavbarComponent() {
    return (
        <>
            <Navbar fixed="top" bg="dark" variant="dark">
                <Navbar.Brand href="">Portfolio Planner</Navbar.Brand>
                <Nav className="mr-auto"></Nav>
                <Link to="/Portfolio_Planner/">
                    <Button variant="outline-info" className="mr-sm-2">Home</Button> 
                </Link>
                <Link to="/search">
                    <Button variant="outline-info" className="mr-sm-2">Company Search</Button>
                </Link>
                <Link to="/portfolio">
                    <Button variant="outline-info" className="mr-sm-2">Portfolio</Button>
                </Link>
            </Navbar>
            <br/>
            <br/>
        </>
    )
}