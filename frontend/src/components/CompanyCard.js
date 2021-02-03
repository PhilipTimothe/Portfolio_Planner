import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {setCompany} from '../redux/actionCreator'

function CompanyCard(props) {
    // const {name, type} = props.company
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
                    <Link to={`/company-overview/${props.id}`}>
                        <Button variant="dark" onClick={() => props.setCompany(props.company)}> Explore </Button>{' '}
                    </Link>
                </Card.Body>
            </Card>
        </>
    )
}



export default connect(null, {setCompany})(CompanyCard)