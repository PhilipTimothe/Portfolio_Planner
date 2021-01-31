import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export function Company(props) {
    return ( 
        <>
            <Card id={props.id} style={{ width: '30rem', margin: '1rem auto' }} >
                <Card.Header as="h5">Company Symbol: {props.companySymbol}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.companyName}</Card.Title>
                    <Card.Text>
                        Industry Type: {props.companyType} <br/>
                        Region: {props.companyRegion} <br/>
                        Currency: {props.companyCurrency} <br/>
                    </Card.Text>
                    <link to={"/company"}>
                    <Button variant="dark" onClick={(e) => props.handleExploreClick(props, e)}> Explore </Button>{' '}
                    </link>
                    <Button variant="dark" > Add to Portfolio </Button>
                </Card.Body>
            </Card>
        </>
    )
}