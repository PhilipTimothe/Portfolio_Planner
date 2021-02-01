import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import { CompanyOverview } from '../components/CompanyOverview';
import { store } from '../store';


export default class CompanyContainer extends Component {
    state = {
        selectedCompany: store.currentCompany,
    };

    renderSelectedCompany() {
        // store.currentCompany = []
        console.log(this.state.selectedCompany);

        return (
            <>
                {this.state.selectedCompany.map((company) => (
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
                        handleAddToPortfolio={this.handlePortfolio}
                    />
                ))}
            </>
        );
    }

    handlePortfolio(companyInfo) {
        store.currentPortfolio.push(companyInfo);
        console.log(store.currentPortfolio)
    }

    render() {
        return (
            <>
                <div>
                    {this.renderSelectedCompany()}
                </div>
            </>
        );
    }


}
