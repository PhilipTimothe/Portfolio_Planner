import React, { Component } from "react";
import PortfolioComponent from "../components/PortfolioComponent"
import { connect } from 'react-redux'
import { getPortfolio } from '../redux/actionCreator'


class PortfolioContainer extends Component {

componentDidMount() {
        this.props.getPortfolio()
}


    render() {
        
        return (
            <>
                <div>
                    <br/>
                    <PortfolioComponent companies={this.props.currentPortfolio}/>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    currentPortfolio: state.currentPortfolio
})

export default connect((mapStateToProps), {getPortfolio}) (PortfolioContainer)