import { v4 as uuidv4 } from 'uuid';

const initialState = {
    currentCompany: {},
    currentPortfolio: [],
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_COMPANY":
            return {
                ...state, currentCompany: {id: uuidv4(), ...action.payload.company},
            }

        case "GET_PORTFOLIO":
            const companies = [...state.currentPortfolio, action.payload.company]
            const result = Array.from(new Set(companies.map(s => s.id)))
                .map(id => {
                    return {
                        id: id,
                        Name: companies.find(s => s.id === id).Name,
                        Symbol: companies.find(s => s.id === id).Symbol,
                        Industry: companies.find(s => s.id === id).Industry,
                        Country: companies.find(s => s.id === id).Country

                    };
                });
            return {
                ...state, currentPortfolio: result
            }    

        case "SET_PORTFOLIO":
            return {
                ...state
            }

        case "DELETE_COMPANY":

            return {
                ...state, currentPortfolio: [...state.currentPortfolio.filter(company => company["id"] !== action.payload.companyId)]
            }


        default: return {...state}

    }
}