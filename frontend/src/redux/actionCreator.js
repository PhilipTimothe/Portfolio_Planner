export const getCompany = (symbol) => {
    return (dispatch) => {
        const apiKey = process.env.API_KEY;
        fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`)
            .then((res) => res.json())
            .then(data =>  {
                const company = Object(data);
                dispatch({ 
                    type: "GET_COMPANY",
                    payload: { 
                        company: company
                    },
                })
            })
    }
}



export const getPortfolio = () => {
    return (dispatch) => {
        fetch(`http://localhost:3000/companies`)
            .then((res) => res.json())
            .then(data =>  {
                // console.log(Object(data))
                Object(data).map((company) => (
                    dispatch({ 
                        type: "GET_PORTFOLIO",
                        payload: { 
                            company
                        },
                    })
                ))
            })
    }
}

// Add companies to portfolio
export const setPortfolio = (company) => {
    return (dispatch) => {
        const data = {
            Name: company["Name"],
            Symbol: company["Symbol"],
            Industry: company["Industry"],
            Country: company["Country"]
        };

        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(data),
        };
        return fetch(`http://localhost:3000/companies`, config)
                .then(response => response.json())
                .then((data) => {
                    dispatch({ 
                        type: "SET_PORTFOLIO",
                        payload: { 
                            data
                        },
                    })
                })
    }
}

export const deleteCompany = (companyId) => {
    return (dispatch) => {
        const data = {
            id: companyId
        };
        const config = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(data),
        };
        return fetch(`http://localhost:3000/companies/${companyId}`, config)
                .then(response => response.json())
                .then((data) => {
                    dispatch({ 
                        type: "DELETE_COMPANY",
                        payload: { 
                            data
                        },
                    })
                })
    }
}




// ({
//     type: "DELETE_COMPANY",
//     payload: {companyId}
// })
