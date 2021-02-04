import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import {connect} from 'react-redux'
import { getCompany } from '../redux/actionCreator'
import CompanyOverview from '../components/CompanyOverview';

class CompanyContainer extends Component {
    state = {
        currentCompany: [],
    };

    renderSelectedCompany() {

        return (
            <>
                <CompanyOverview
                    key={uuidv4()}
                    id={uuidv4()}
                    symbol={this.props.currentCompany["Symbol"]}
                    name={this.props.currentCompany["Name"]}
                    industry={this.props.currentCompany["Industry"]}
                    assetType={this.props.currentCompany["AssetType"]}
                    currency={this.props.currentCompany["Currency"]}
                    exchange={this.props.currentCompany["Exchange"]}
                    country={this.props.currentCompany["Country"]}
                    sector={this.props.currentCompany["Sector"]}
                    address={this.props.currentCompany["Address"]}
                    description={this.props.currentCompany["Description"]} 
                    // handleAddToPortfolio={this.handlePortfolio}
                />
            </>
        );
    }

    componentDidMount() {
        this.props.getCompany(this.props.currentCompanySymbol)
    }

    // handlePortfolio(companyInfo) {
    // }

    render() {
        return (
            <>
                <div>
                    {this.props.currentCompany && this.renderSelectedCompany()}
                </div>
            </>
        );
    }


}

const mapStateToProps = (state) => ({
    currentCompanySymbol: state.currentCompanySymbol,
    currentCompany: state.currentCompany
})

export default connect(mapStateToProps, {getCompany}) (CompanyContainer)

// repeatative rendering crashes app
// After Company Overview renders and then user links to home page, user cant navigate back to company overview
