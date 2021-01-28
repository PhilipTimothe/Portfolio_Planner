import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import CompanyList from './CompanyList';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// component needs to provide a search form, then display any search results after input is sumbitted.
// results list should save information to state but only show current search results
// on submit form information needs to be fetched

const apiKey = process.env.API_KEY;
// const BASE_URL =
//   'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=' +
//   `api-key=${NYT_API_KEY}&query=`;

export default class CompanySearchForm extends Component {
    state = {
          symbol: "",
          searchResultsList: []
    }

    handleChange = event => {
        this.setState({
            symbol: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
       
        fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.symbol}&apikey=${apiKey}`)
            .then((res) => res.json())
            // .then((data) => console.log(data));
            .then(data => {
                const companies = Object(data.bestMatches);
                this.setState({ 
                    searchResultsList: companies
            })
        })
    }

    renderCompanyList() {
        return (
            <>
                {this.state.searchResultsList.map((company) => (
                    <CompanyList 
                        key={uuidv4()}
                        companySymbol={company["1. symbol"]} 
                        companyName={company["2. name"]}
                        companyType={company["3. type"]}
                        companyRegion={company["4. region"]}
                        companyCurrency={company["8. currency"]}
                    />
                ))}
            </>
        )
    }

    render() {
        return (
            <>
                <Form onSubmit={this.handleSubmit} style={{ width: '30rem', margin: '1rem auto'}}>
                    <Form.Group controlId="SearchForm">
                        <Form.Label>Search</Form.Label>
                        <Form.Control 
                                type="text" 
                                placeholder="Enter any symbol or letter" 
                                name="symbol" 
                                value={this.state.symbol} 
                                onChange={this.handleChange}
                                />
                        <Form.Text className="text-muted">
                            Search by letter or full company name for some specific symbols or companies. 
                        </Form.Text>
                    </Form.Group>

                    <Button variant="dark" type="submit">
                        Search
                    </Button>
                </Form>
                <div>
                    {this.renderCompanyList()}
                </div>
            </>
        );
    };
}

//  <form onSubmit={this.handleSubmit}>
//     <input 
//         type="text" 
//         name="symbol" 
//         value={this.state.symbol} 
//         onChange={this.handleChange}
//     />
//     <button type="submit">Search</button>
// </form> 

