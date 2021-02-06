import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import { CompanySearchForm } from '../components/CompanySearchForm';
import CompanyCard from '../components/CompanyCard';
import { connect } from 'react-redux'
import { getPortfolio } from '../redux/actionCreator'

// Have to figure out how to get routed page to render.

const apiKey = process.env.API_KEY;

class CompanySearchContainer extends Component {
    state = {
          symbol: "",
          searchResultsList: [],
          validated: false,
          initialRender: true
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
                        // company={company["1. symbol"]}
                    />
                ))}
            </>
        )
    }

    // componentDidMount() {
    //     if (this.state.initialRender !== null) {
    //         this.props.getPortfolio()
    //         this.setState({ initialRender: true })
    //     }
    // }

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
                    {this.renderCompanyList()}
                </div>
            </>
        );
    };
}

export default connect(null, {getPortfolio}) (CompanySearchContainer)