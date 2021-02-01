import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import { SearchForm } from '../components/CompanySearchForm';
import { Company } from '../components/CompanyCard';
import { CompanyView } from '../components/CompanyOverview';
import { store } from '../store';

// Have to figure out how to get routed page to render.

const apiKey = process.env.API_KEY;

export default class CompanySearchForm extends Component {
    state = {
          symbol: "",
          searchResultsList: [],
          currentCompany: [],
          validated: false,
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
                {this.state.currentCompany.map((company) => (
                    <CompanyView
                        key={uuidv4()}
                        id={uuidv4()}
                        symbol={company["Symbol"]} 
                        name={company["Name"]}
                        industry={company["Industry"]}
                        assetType={company["AssetType"]}
                        currency={company["Currency"]}
                        exchange={company["Exchange"]}
                        country={company["Country"]}
                        sector={company["Sector"]}
                        address={company["Address"]}
                        description={company["Description"]}
                        handleAddToPortfolio={this.handlePortfolio}
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

    handleCompanySelection = (companyInfo, event) => {
        this.setState({
            currentCompany: []
        })
        event.preventDefault();
        fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${companyInfo["companySymbol"]}&apikey=${apiKey}`)
            .then((res) => res.json())
            .then(data => // store.currentCompany.push(Object(data)));
                {
                const company = Object(data);
                this.setState({ 
                    currentCompany: [...this.state.currentCompany, company]
                })
                store.currentCompanySymbol += company["Symbol"]
                console.log(store.currentCompanySymbol)
            })
            
    }

    handlePortfolio(companyInfo) {
        store.currentPortfolio.push(companyInfo);
        console.log(store.currentPortfolio)
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
                    {this.state.currentCompany.length > 0 && this.renderSelectedCompany()}
                    {this.renderCompanyList()}
                </div>
            </>
        );
    };
}