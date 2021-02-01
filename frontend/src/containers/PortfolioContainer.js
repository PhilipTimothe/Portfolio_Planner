import React, { Component } from "react";
import store from "../store"
import { Portfolio } from "../components/Portfolio"
import Table from 'react-bootstrap/Table';

export default class Portfolio extends Component {
    state = {
        portfolio: store.currentPortfolio
    };

    renderPortfolio() {
        return (
            <>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Company Name</th>
                        <th>Company Symbol</th>
                        <th>Company Industry</th>
                        </tr>
                    </thead>
                        {this.state.portfolio.map((company, index) => {
                            <Portfolio 
                                key={index}
                                name={company["name"]}
                                symbol={company["symbol"]}
                                industry={company["industry"]}
                                region={company["country"]}
                            />
                        })}
                </Table>
            </>
        )
    }

    render() {
        return (
            <>
            
            </>
        )
    }
}