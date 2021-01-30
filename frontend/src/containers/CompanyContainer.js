import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import { SearchForm } from '../components/CompanyForm';
import { Company } from '../components/CompanyCard';
import { CompanyView } from '../components/CompanyOverview';

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
          currentCompany: [],
          validated: false
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
                        handleExploreClick={this.handleCompanySelection}
                    />
                ))}
            </>
        )
    }

    renderSelectedCompany() {
        return (
            <>
                    <CompanyView
                        key={uuidv4()}
                        id={uuidv4()}
                        symbol={this.state.currentCompany["Symbol"]} 
                        name={this.state.currentCompany["Name"]}
                        industry={this.state.currentCompany["Industry"]}
                        assetType={this.state.currentCompany["AssetType"]}
                        currency={this.state.currentCompany["Currency"]}
                        exchange={this.state.currentCompany["Exchange"]}
                        country={this.state.currentCompany["Country"]}
                        sector={this.state.currentCompany["Sector"]}
                        address={this.state.currentCompany["Address"]}
                        description={this.state.currentCompany["Description"]}
                        // handleExploreClick={this.handleCompanySelection}
                    />
            </>
        )
    }

    handleSearchFormChange = event => {
        this.setState({
            symbol: event.target.value
        })
    }

    handleSearchFormSubmit = event => {
        // console.log(this.state.symbol)
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

    handleCompanySelection = (event, companyInfo) => {

        fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${companyInfo["companySymbol"]}&apikey=${apiKey}`)
            .then((res) => res.json())
            .then(data => {
                const company = Object(data);
                this.setState({ 
                    currentCompany: company
                })
            })
            console.log(this.state.currentCompany["Name"])
    }

    render() {
        return (
            <>
                <SearchForm 
                    onSubmit={this.handleSearchFormSubmit}
                    validated={this.state.validated}
                    value={this.state.symbol}
                    onChange={this.handleSearchFormChange}
                />
                <div>
                    { this.state.currentCompany.length > 0 && this.renderSelectedCompany()}
                    {this.renderCompanyList()}
                </div>
            </>
        );
    };
}