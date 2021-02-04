import React, { Component } from "react";
import { Portfolio } from "../components/Portfolio"
import {connect} from 'react-redux'

class PortfolioContainer extends Component {
    state = {
        portfolio: []
    };

    render() {
        return (
            <>
                <div>
                    <br/>
                    <Portfolio companies={this.props.currentPortfolio}/>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    currentPortfolio: state.currentPortfolio
})

export default connect(mapStateToProps) (PortfolioContainer)