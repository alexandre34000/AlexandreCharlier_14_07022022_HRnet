import usersConstantes from '../_constantes/usersConstantes';
import {getUsersFetch} from '../_services/service';
import {mixer} from '../_helpers/mixer'

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
  getUsersFetch()
    .then(data => {
      if (data.results) {
        let resultats = mixer(data.results)
        dispatch(getUsersAction(resultats))
      }
    })
    .catch((err) => { console.log(err) })
    
}

/**
 *  Update of the user's profile
 * @param {<Object>} userInfo {firstName:, lastName:}
 * @returns Promise
 */
export const createUser = (userInfo) => dispatch => {
/*   allServices.userService.updateUserProfil(userInfo)
    .then(data => {
      if (data.message) {
        dispatch(updateUser(data.body))
      } 
    })
    .catch((err) => { console.log(err) }) */
    dispatch(createUserAction())
}

/* const exportFunction = {
  getUsers,
  createUser
} */
