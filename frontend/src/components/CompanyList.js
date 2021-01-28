import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Company(props) {

    return  <>
            <Card style={{ width: '30rem', margin: '1rem auto' }}>
                <Card.Header as="h5">Company Symbol: {props.companySymbol}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.companyName}</Card.Title>
                    <Card.Text>
                        Industry Type: {props.companyType} <br/>
                        Region: {props.companyRegion} <br/>
                        Currency: {props.companyCurrency} <br/>
                    </Card.Text>
                    <Button variant="dark">Explore</Button>{' '}
                    <Button variant="dark">Add to Portfolio</Button>
                </Card.Body>
            </Card>
            </>
}

// return <ul className="company">
//             {props.companySymbol} <br/>
//             {props.companyName} <br/>
//             {/* <blockquote>{summary_short}</blockquote> */}
//         </ul>

export default Company;