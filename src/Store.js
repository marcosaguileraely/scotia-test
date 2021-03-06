import { createStore } from "redux";

const initialState = {
    Customer: {
        Name: "",
        LastName: "",
        Phone: "",
        Residential_Addr: {
            StreetNumber: "",
            StreetName: "",
            City: "",
            Province: "",
            Code: "",
        },
        Property_Addr: {
            StreetNumber: "",
            StreetName: "",
            City: "",
            Province: "",
            Code: "",
        },
        Employment_Addr: {
            Previous: [],
            Current: []
        }
    }
};

const reducerFunctions = (state = initialState, action) => {
    if (action.type === "ADD_CUSTOMER_BASIC_INFO") {
        //TODO: Add Customer
        console.log('ADD_CUSTOMER_BASIC_INFO')
        //console.log(action.value)
        return {
            ...state,
            Customer: {
                ...state.Customer,
                Name: action.value.name,
                LastName: action.value.last_name,
                Phone: action.value.phone,
            }
        }
    }

    if (action.type === "ADD_ADDRESS") {
        //TODO: Add Residential Address
        console.log('ADD_ADDRESS')
        console.log("Evaluation context...")

        if (action.value.context_name === "residential_form") {
            console.log("Context: Residential address...")
            return {
                ...state,
                Customer: {
                    ...state.Customer,
                    Residential_Addr: {
                        StreetNumber: action.value.street_number,
                        StreetName: action.value.street_name,
                        City: action.value.city,
                        Province: action.value.province,
                        Code: action.value.postal_code,
                    }
                }
            }
        }

        if (action.value.context_name === "property_form") {
            console.log("Context: Propierty address...")
            return {
                ...state,
                Customer: {
                    ...state.Customer,
                    Property_Addr: {
                        StreetNumber: action.value.street_number,
                        StreetName: action.value.street_name,
                        City: action.value.city,
                        Province: action.value.province,
                        Code: action.value.postal_code,
                    }
                }
            }
        }

        if (action.value.context_name === "employment_form") {
            console.log("Context: Employment address...")
            return {
                ...state,
                Customer: {
                    ...state.Customer,
                    Employment_Addr: {
                        Type: action.value.type,
                        JobStatus: action.value.job_status,
                        StreetNumber: action.value.street_number,
                        StreetName: action.value.street_name,
                        City: action.value.city,
                        Province: action.value.province,
                        Code: action.value.postal_code,
                    }
                }
            }
        }

    }

    // if (action.type === "ADD_PROPERTY_ADDRESS") {
    //     //TODO: Add Property Address
    // }

    // if (action.type === "ADD_EMPLOYMENT_ADDRESS") {
    //     //TODO: Add Employment Address
    // }
    return state
}

export default createStore(reducerFunctions);