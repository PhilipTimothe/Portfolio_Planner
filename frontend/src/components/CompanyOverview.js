import React, { useState } from 'react';
import CompanyChartContainer from '../containers/CompanyChartContainer'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {connect} from 'react-redux'

function CompanyOverview(props) {
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
                        <Button variant="dark" onClick={(e) => props.handleAddToPortfolio(props, e)}> Add to Portfolio </Button>{' '}
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

const mapStateToProps = (state) => ({
    currentCompany: state.currentCompany,
})

export default connect(mapStateToProps)(CompanyOverview)