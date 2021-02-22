import React, { useState } from 'react';
import CompanyChartContainer from '../containers/CompanyChartContainer'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { setPortfolio } from '../redux/actionCreator'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function CompanyOverviewComponent(props) {
    const [key, setKey] = useState('overview');
    
    return ( 
        <>
        <Tabs id={props.id} style={{ width: '50rem', margin: '1rem auto' }} unmountOnExit activeKey={key}
      onSelect={(k) => setKey(k)}>
            <Tab eventKey="overview" title="Company Overview">
                <Card style={{ width: '50rem', margin: '1rem auto' }} >
                    <Card.Body >
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
                            <Button variant="dark" onClick={() => props.setPortfolio(props.company)}> Add to Portfolio </Button>{' '}
                            <Link to="/">
                                <Button variant="dark" > Start a New Search </Button>{' '}
                            </Link>
                    </Card.Body>
                </Card>
            </Tab>
            <Tab eventKey="datachart" title="Data Chart">
                <Card style={{ width: '50rem', margin: '1rem auto' }} >
                    <Card.Body >
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                            {<CompanyChartContainer id={props.param} />}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Tab>
        </Tabs>
        </>
    )
}

export default connect(null, {setPortfolio}) (CompanyOverviewComponent)