import React, { Component } from "react";

// Once button is click on for company(company is selected), company full profile is then loaded.

// export function handleExploreClick(companyInfo) {
//     console.log(companyInfo);
// }

export default class CompanyContainer extends Component {
    state = {
        Company: []
    };

    render() {
        return (
            <h1>Company LookUp</h1>
        );
    };

}