import { POST_MAIL, SET_IDIOM} from "../actions";

const initialState = {
    idiom:"EN",
}

const rootReducer = (state = initialState, action)=>{
    switch(action.type) {
        case POST_MAIL:
            return{
                ...state
            }
        case SET_IDIOM:
            return{
                ...state,
                idiom:action.payload
            }
    }
}

export default rootReducer;