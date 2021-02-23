import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export function LandingPageComponent() {
    return (
        <>
            <Jumbotron fluid>
                <Container>
                    <h1>Portfolio Planner</h1>
                    <p>
                        Build a financial portfolio with finacial tools that help you discover new companies along with relative financial history and company information.
                    </p>
                </Container>
            </Jumbotron>
            <br />
            <br />
            <div style={{ textAlign: 'center', padding: '70px 0' }}>
                <Link to="/search">
                    <Button variant="outline-info">
                        Start a New Company Search
                    </Button>
                </Link>
            </div>
        </>
    )
}