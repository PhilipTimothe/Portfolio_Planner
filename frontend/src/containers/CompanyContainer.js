import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import {connect} from 'react-redux'
import { getCompany } from '../redux/actionCreator'
import CompanyOverviewComponent from '../components/CompanyOverviewComponent';

class CompanyContainer extends Component {
    state = {
    };

    renderSelectedCompany(id) {

        return (
            <>
                <CompanyOverviewComponent
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
                    company={this.props.currentCompany}
                    param={id}
                />
            </>
        );
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getCompany(id)
    }

    render() {
        const { id } = this.props.match.params;
        return (
            <>
                <div>
                    {this.props.currentCompany && this.renderSelectedCompany(id)}
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