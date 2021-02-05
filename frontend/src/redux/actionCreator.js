// export const setSymbol = (companySymbol) => ({
//     type: "SET_SYMBOL",
//     payload: {companySymbol: companySymbol}
// })

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
                const company = Object(data);
                dispatch({ 
                    type: "GET_PORTFOLIO",
                    payload: { 
                        company
                    },
                })
            })
    }
}

// Add companies to portfolio
export const setPortfolio = (company) => ({
    type: "SET_PORTFOLIO",
    payload: {company}
})

export const deleteCompany = (companyId) => ({
    type: "DELETE_COMPANY",
    payload: {companyId}
})
