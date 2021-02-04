const initialState = {
    currentCompanySymbol: {},
    currentCompany: {},
    currentPortfolio: [],
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_SYMBOL":
            return {
                ...state, currentCompanySymbol: action.payload.companySymbol
            };

        case "GET_COMPANY":
            return {
                ...state, currentCompany: action.payload.company
            }


        default: return {...state}

    }
}