import TableRegister from "../../components/TableRegister";
import {NavLink} from 'react-router-dom';
import {createUser} from '../../_actions/usersActions';
import {useDispatch,  useSelector} from 'react-redux'
import { useEffect } from "react";

const CreateEmpl = () => {

    const dispatch = useDispatch();
    const arrayOfUsers = useSelector((state)=> state.listUsers)

    const childSubmit =(user) =>{
        console.log(user)
      //  dispatch(createUser(arrayOfUsers, user))
    }

    return (
        <div className="container-createEmpl">
            <div className="content-createEmpl">
                <div className="createEmpl-title">
                </div>
                {/* <NavLink className="header-content__nav-link" to="/ListEmpl"> View Current Employees</NavLink> */}
                <section className="createEmpl-table__container">
                    <h2>Create Employee</h2>
                    <div className="createEmpl-table__content">
                    <TableRegister childFunction={childSubmit} />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default CreateEmpl;