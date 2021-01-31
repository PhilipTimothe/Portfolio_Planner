import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

export function CompanyView(props) {
    return ( 
        <>
            <Card id={props.id} style={{ width: '50rem', margin: '1rem auto' }} >
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                        <Nav.Item>
                            <Nav.Link href="#first">Company Summary</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">Chart</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#disabled">Disabled</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        Company Symbol: {props.symbol} <br/>
                        Industry: {props.industry} <br/>
                        Asset Type: {props.assetType} <br/>
                        Currency: {props.currency} <br/>
                        exchange: {props.exchange} <br/>
                        Country: {props.country} <br/>
                        Sector: {props.sector} <br/>
                        Address: {props.address} <br/>
                        <br/>
                        Description: {props.description} <br/>
                    </Card.Text>
                    {/* <Button variant="dark" onClick={(e) => props.handleExploreClick(props, e)}> Explore </Button>{' '} */}
                    <Button variant="dark" > Add to Portfolio </Button>
                </Card.Body>
            </Card>
        </>
    )
}