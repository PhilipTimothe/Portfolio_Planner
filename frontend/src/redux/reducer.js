import { v4 as uuidv4 } from 'uuid';

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
                ...state, currentCompany: {id: uuidv4(), ...action.payload.company},
            }

        case "SET_PORTFOLIO":
            return {
                ...state, currentPortfolio: [...state.currentPortfolio ,action.payload.company]
            }

        case "DELETE_COMPANY":

            return {
                ...state, currentPortfolio: [...state.currentPortfolio.filter(company => company["id"] !== action.payload.companyId)]
            }


        default: return {...state}

    }
}