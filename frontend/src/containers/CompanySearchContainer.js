import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import { CompanySearchForm } from '../components/CompanySearchForm';
import CompanyCard from '../components/CompanyCard';

// Have to figure out how to get routed page to render.

const apiKey = process.env.API_KEY;

export default class CompanySearchContainer extends Component {
    state = {
          symbol: "",
          searchResultsList: [],
          validated: false,
    }

    renderCompanyList() {
        return (
            <>
                {this.state.searchResultsList.map((company) => (
                    <CompanyCard 
                        key={uuidv4()}
                        id={uuidv4()}
                        companySymbol={company["1. symbol"]} 
                        companyName={company["2. name"]}
                        companyType={company["3. type"]}
                        companyRegion={company["4. region"]}
                        companyCurrency={company["8. currency"]}
                        company={company}
                    />
                ))}
            </>
        )
    }

    handleSearchFormChange = event => {
        this.setState({
            symbol: event.target.value
        })
    }

    handleSearchFormSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false && this.state.symbol === '') {
            event.preventDefault();
            event.stopPropagation();

        } else {

        event.preventDefault();
        fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.symbol}&apikey=${apiKey}`)
            .then((res) => res.json())
            .then(data => {
                const companies = Object(data.bestMatches);
                this.setState({ 
                    searchResultsList: companies,
                    validated: true
                })
            })
        }
    }

    render() {
        return (
            <>
                <CompanySearchForm 
                    onSubmit={this.handleSearchFormSubmit}
                    validated={this.state.validated}
                    value={this.state.symbol}
                    onChange={this.handleSearchFormChange}
                />
                <div>
                    {/* {this.state.currentCompany.length > 0 && this.renderSelectedCompany()} */}
                    {this.renderCompanyList()}
                </div>
            </>
        );
    };
}