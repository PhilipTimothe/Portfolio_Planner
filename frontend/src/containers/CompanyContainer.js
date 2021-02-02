import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import CompanyOverview from '../components/CompanyOverview';
import { store } from '../store';

const apiKey = process.env.API_KEY;

export default class CompanyContainer extends Component {
    state = {
        company: store.currentCompany,
        currentCompany: [],
    };

    renderSelectedCompany() {
        // store.currentCompany = []
        console.log(this.state.company);

        return (
            <>
                {this.state.currentCompany.map((company) => (
                    <CompanyOverview
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
                        // handleAddToPortfolio={this.handlePortfolio}
                    />
                ))}
            </>
        );
    }

    componentDidMount() {
        fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${this.state.company["companySymbol"]}&apikey=${apiKey}`)
            .then((res) => res.json())
            .then(data =>  
                {
                const company = Object(data);
                this.setState({ 
                    currentCompany: [...this.state.currentCompany, company]
                })
                store.currentCompanySymbol += company["Symbol"]
                console.log(this.state.currentCompany)
            })
    }

    handlePortfolio(companyInfo) {
        store.currentPortfolio.push(companyInfo);
        console.log(store.currentPortfolio)
    }

    render() {
        return (
            <>
                <div>
                    {this.state.currentCompany.length > 0 && this.renderSelectedCompany()}
                </div>
            </>
        );
    }


}
