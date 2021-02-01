import React from 'react';
import CompanyChart from '../containers/CompanyChartContainer'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export function CompanyView(props) {
    return ( 
        <>
        <Tabs id={props.id} style={{ width: '50rem', margin: '1rem auto' }} defaultActiveKey="home" transition={false}>
            <Tab eventKey="home" title="Company Overview">
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
                        {/* <Button variant="dark" onClick={(e) => props.handleExploreClick(props, e)}> Explore </Button>{' '} */}
                        <Button variant="dark" > Add to Portfolio </Button>
                    </Card.Body>
                </Card>
            </Tab>
            <Tab eventKey="Data Chart" title="Data Chart">
                <Card style={{ width: '50rem', margin: '1rem auto' }} >
                    <Card.Body >
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                            <CompanyChart />
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Tab>
        </Tabs>
        </>
    )
}