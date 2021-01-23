const INITIAL_STATE = {
    user : []
}

export default (state = INITIAL_STATE,action) => {
   switch(action.type){
       case "ALL_DATA_FIRST":
           return {
               ...state,
               user : action.payload
           }
       case "ALL_DATA":
            return {
                ...state,
                user : action.payload
            }
        case "SET_DATA":
            return {
                ...state,
                user : [...state.user,action.payload]
            }
        case "DELETE_DATA":
            return ({
                user : action.payload
            });
        case "UPDATE_DATA":
            return ({
                user : action.payload
            })
        default :
            return state;
   }
}