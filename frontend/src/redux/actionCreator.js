export const setCompany = (companySymbol) => ({
    type: "SET_COMPANY",
    payload: {companySymbol: companySymbol}
})

export const getCompany = (symbol) => {
    return (dispatch) => {
        const apiKey = process.env.API_KEY;
        fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`)
            .then((res) => res.json())
            .then(data =>  {
                const company = Object(data);
                console.log(Object(data))

                dispatch({ 
                    type: "GET_COMPANY",
                    payload: { 
                        company: company
                    },
                })
            })
    }
}
