import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export function Company(props) {
    return ( 
        <>
            <Card style={{ width: '30rem', margin: '1rem auto' }} >
                <Card.Header as="h5">Company Symbol: {props.companySymbol}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.companyName}</Card.Title>
                    <Card.Text>
                        Industry Type: {props.companyType} <br/>
                        Region: {props.companyRegion} <br/>
                        Currency: {props.companyCurrency} <br/>
                    </Card.Text>
                    <Button variant="dark" onClick={(id) => props.handleExploreClick(props, id)}> Explore </Button>{' '}
                    <Button variant="dark" > Add to Portfolio </Button>
                </Card.Body>
            </Card>
        </>
    )
}