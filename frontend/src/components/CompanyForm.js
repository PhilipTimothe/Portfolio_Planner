import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function SearchForm(props) {
    return ( 
        <>
            <Form onSubmit={props.onSubmit} style={{ width: '30rem', margin: '1rem auto'}}>
                <Form.Group controlId="SearchForm">
                    <Form.Label>Search</Form.Label>
                    <Form.Control 
                            type="text" 
                            placeholder="Enter any symbol or letter" 
                            name="symbol" 
                            value={props.value} 
                            onChange={props.onChange}
                            />
                    <Form.Text className="text-muted">
                        Search by letter or full company name for some specific symbols or companies. 
                    </Form.Text>
                </Form.Group>

                <Button variant="dark" type="submit">
                    Search
                </Button>
            </Form>
        </>
    )
}