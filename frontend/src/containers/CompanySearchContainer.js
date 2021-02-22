import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import { CompanySearchComponent } from '../components/CompanySearchComponent';
import CompanyCardComponent from '../components/CompanyCardComponent';
import { connect } from 'react-redux'
import { getPortfolio } from '../redux/actionCreator'
// import CounterComponent from '../components/CounterComponent';

const apiKey = process.env.API_KEY;

class CompanySearchContainer extends Component {
    state = {
          symbol: "",
          searchResultsList: [],
          validated: false,
          initialRender: true
    }

    // Component Prop functionality passing result list array data to Card Component
    renderCompanyList() {
        return (
            <>
                {this.state.searchResultsList.map((company) => (
                    <CompanyCardComponent 
                        key={uuidv4()}
                        id={uuidv4()}
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

    // review call apply and bind relative to non arrow functionality
    handleSearchFormChange = event => {
        this.setState({
            symbol: event.target.value
        })
    }

    // Submit condition which searches for a company list via submitted symbol or letter
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

    // Company Search Form functionality by Symbol of Company.  Also, rendering of search result component.
    render() {
        return (
            <>
                <CompanySearchComponent 
                    onSubmit={this.handleSearchFormSubmit}
                    validated={this.state.validated}
                    value={this.state.symbol}
                    onChange={this.handleSearchFormChange}
                />
                <div>
                    {this.renderCompanyList()}
                </div>
                {/* <CounterComponent /> */}
            </>
        );
    };
}

export default connect(null, {getPortfolio}) (CompanySearchContainer)