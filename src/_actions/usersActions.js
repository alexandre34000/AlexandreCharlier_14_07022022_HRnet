import usersConstantes from '../_constantes/usersConstantes';
import {createUserFetch} from '../_services/service';
import bodyElements from '../data/dataMocks';


const getUsersAction = (userObj) => ({
  type: usersConstantes.USERS_REQUEST,
  payload: userObj
})

const createUserAction =(userObj) =>({
  type: usersConstantes.USER_CREATE,
  payload: userObj
})

/**
 * Recovery of the registered user's profile
 * @returns Promise
 */
export const getUsers = () => dispatch => {  
    dispatch(getUsersAction(bodyElements))
}

/**
 *  Update of the user's profile
 * @param {<Object>} userInfo {firstName:, lastName:}
 * @void Dispatch on action
 */
export const createUser = (arrayList, user) => dispatch => {
  let response =createUserFetch(user);
  if (response ==="employee created"){
    arrayList.push(user);
    dispatch(createUserAction(arrayList))
  }
}