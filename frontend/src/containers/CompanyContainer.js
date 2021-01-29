import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import { SearchForm } from '../components/CompanyForm';
import { Company } from '../components/CompanyCard';

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
          searchResultsList: [],
          currentCompany: []
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
            .then(data => {
                const companies = Object(data.bestMatches);
                this.setState({ 
                    searchResultsList: companies
            })
        })
    }

    companySelection = (companyInfo) => {
        this.setState({
            currentCompany: companyInfo,
        })
            console.log(companyInfo);
    }

    renderCompanyList() {
        return (
            <>
                {this.state.searchResultsList.map((company) => (
                    <Company 
                        key={uuidv4()}
                        id={uuidv4()}
                        companySymbol={company["1. symbol"]} 
                        companyName={company["2. name"]}
                        companyType={company["3. type"]}
                        companyRegion={company["4. region"]}
                        companyCurrency={company["8. currency"]}
                        handleExploreClick={this.companySelection}
                    />
                ))}
            </>
        )
    }

    render() {
        return (
            <>
                <SearchForm 
                    onSubmit={this.handleSubmit}
                    value={this.state.symbol}
                    onChange={this.handleChange}
                />
                <div>
                    {this.renderCompanyList()}
                </div>
            </>
        );
    };
}