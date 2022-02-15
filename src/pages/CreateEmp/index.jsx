import TableRegister from "../../components/TableRegister";
import { createUser } from '../../_actions/usersActions';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import Modal from "../../components/Modal"

const CreateEmpl = () => {

    const dispatch = useDispatch();
    const arrayOfUsers = useSelector((state) => state.listUsers)
    const [isModal, setModal] = useState(false);

    const childSubmit = (user) => {
        dispatch(createUser(arrayOfUsers, user))
        setModal(true)
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
                        <TableRegister parentFunction={childSubmit} />
                    </div>
                </section>
            </div>
            {isModal &&
                <Modal modal={setModal} textButton="Close" textTitle="employee was created succesfully ">
                </Modal>
            }
        </div>
    );
}

export default CreateEmpl;