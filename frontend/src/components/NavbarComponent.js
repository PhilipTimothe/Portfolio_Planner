import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export function NavbarComponent() {
    return (
        <>
            <Navbar fixed="top" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Portfolio Planner</Navbar.Brand>
                <Nav className="mr-auto"></Nav>
                <Link to="/">
                <Button variant="outline-info" className="mr-sm-2">Home</Button> 
                </Link>
                <Button variant="outline-info" className="mr-sm-2">Portfolio</Button>
            </Navbar>
            <br/>
            <br/>
        </>
    )
}