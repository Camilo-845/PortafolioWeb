import { POST_MAIL } from "../actions";

const initialState = {

}

const rootReducer = (state = initialState, action)=>{
    switch(action.type) {
        case POST_MAIL:
            return{
                ...state
            }
    }
}