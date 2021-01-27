import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

// component needs to provide a search form, then display any search results after input is sumbitted.
// results list should save information to state but only show current search results
// on submit form information needs to be fetched

export default class CompanySearchForm extends Component {
    state = {
          symbol: "",
          searchResultsList: []
    }

    handleChange = event => {
        this.setState({
            symbol: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const companyObj = {symbol: this.state.symbol, id: uuidv4()}
        const filteredList = this.state.searchResultsList.filter(symbol => symbol === event)
        this.setState({
            searchResultsList: filteredList,
            symbol: ""
        })
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="symbol" 
                        value="{this.state.symbol}" 
                        onChange={this.handleChange}
                    />
                    <button>Search</button>
                </form>
                <ul>
                    {this.state.searchResultsList.map((company) => (
                        <li key={company.id}> {company.symbol} </li>
                    ))}
                </ul>
            </>
        );
    };
}

//  its own state. on submit a function will be invoked in company container.  it'll invoke this.props.search.  as a arugmuments
// this.state.???
