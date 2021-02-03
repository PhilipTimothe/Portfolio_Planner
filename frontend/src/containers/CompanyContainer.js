import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import {connect} from 'react-redux'
import { getCompany } from '../redux/actionCreator'
import CompanyOverview from '../components/CompanyOverview';

const apiKey = process.env.API_KEY;

class CompanyContainer extends Component {
    state = {
        currentCompany: [],
    };

    renderSelectedCompany() {

        return (
            <>
                {/* <CompanyOverview
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
                /> */}
            </>
        );
    }

    componentDidMount() {
        this.props.getCompany(this.props.currentCompanySymbol)
        // return (dispatch) => {
        // fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${this.props.currentCompanySymbol}&apikey=${apiKey}`)
        //     .then((res) => res.json())
        //     .then(data =>  
        //         {
        //             console.log(Object(data))
        //         const company = Object(data);
        //         dispatch({ 
        //             type: "GET_COMPANY",
        //             payload: { 
        //                 company
        //             },
        //         })
        //     })
        // }
    }

    // handlePortfolio(companyInfo) {
    // }

    render() {
        console.log(this.props.currentCompanySymbol)

        return (
            <>
                <div>
                    {this.renderSelectedCompany()}
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

// this.props.currentCompany && 
