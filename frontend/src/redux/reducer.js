const initialState = {
    // currentCompanySymbol: {},
    currentCompany: {},
    currentPortfolio: [],
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        // case "SET_SYMBOL":
        //     return {
        //         ...state, currentCompanySymbol: action.payload.companySymbol
        //     };

        case "GET_COMPANY":
            return {
                ...state, currentCompany: action.payload.company
            }

        case "SET_PORTFOLIO":
            return {
                ...state, currentPortfolio: [...state.currentPortfolio ,action.payload.company]
            }


        default: return {...state}

    }
}