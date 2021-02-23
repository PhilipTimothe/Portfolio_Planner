const backendUrl = 'https://tranquil-escarpment-33998.herokuapp.com'

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
        fetch(`${backendUrl}/companies`)
            .then((res) => res.json())
            .then(data =>  {
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
            id: company["id"],
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
        return fetch(`${backendUrl}/companies`, config)
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
        const config = {
            method: "DELETE",
        };
        fetch(`${backendUrl}/companies/${companyId}`, config)
            dispatch({ 
                type: "DELETE_COMPANY",
                payload: { 
                    companyId
                },
            })
    }
}