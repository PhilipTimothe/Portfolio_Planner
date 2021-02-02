const initialState = {
    currentCompany: {},
    currentCompanySymbol: "",
    currentPortfolio: [],
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_COMPANY":
            return {...state, currentCompany: action.payload.company}
        default: return {...state}

    }
}