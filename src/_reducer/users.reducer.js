import  usersConstantes  from '../_constantes/usersConstantes';

const usersState= {
    listUsers:[]
}

const usersReducer = (state=usersState, action) =>{
   
        switch (action.type) {
          case usersConstantes.USERS_REQUEST:
            return {
              ...state,
              listUsers: action.payload
            }
          case usersConstantes.USER_CREATE:
            return {
              ...state,
              listUsers: action.payload
            }
          default: return state
        }
      
}

export default usersReducer