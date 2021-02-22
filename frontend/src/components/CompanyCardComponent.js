import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export default function CompanyCard(props) {
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
                    <Link to={`/company-overview/${props.companySymbol}`}>
                        <Button variant="dark" > Explore </Button>{' '}
                    </Link>
                </Card.Body>
            </Card>
        </>
    )
}