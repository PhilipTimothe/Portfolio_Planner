import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export function CompanyView(props) {
    return ( 
        <>
            <Card id={props.id} style={{ width: '50rem', margin: '1rem auto' }} >
                <Card.Header as="h5">Company Symbol: {props.symbol}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        Industry: {props.industry} <br/>
                        Asset Type: {props.assetType} <br/>
                        Currency: {props.currency} <br/>
                        exchange: {props.exchange} <br/>
                        Country: {props.country} <br/>
                        Sector: {props.sector} <br/>
                        Address: {props.address} <br/>
                        Description: {props.description} <br/>
                    </Card.Text>
                    {/* <Button variant="dark" onClick={(e) => props.handleExploreClick(props, e)}> Explore </Button>{' '} */}
                    <Button variant="dark" > Add to Portfolio </Button>
                </Card.Body>
            </Card>
        </>
    )
}