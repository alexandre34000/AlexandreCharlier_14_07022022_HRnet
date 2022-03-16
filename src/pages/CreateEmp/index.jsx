import TableRegister from "../../components/TableRegister";
import { createUser } from '../../_actions/usersActions';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import Modal from "../../components/Modal";
import dataRegister from '../../data/dataRegister';
import { employee } from "../../_helpers/employee";
import Title from "../../components/Title";

const CreateEmpl = () => {

    const dispatch = useDispatch();
    const arrayOfUsers = useSelector((state) => state.listUsers)
    const [isModal, setModal] = useState(false);

    const childSubmit = (user) => {
        dispatch(createUser(arrayOfUsers, user))
        setModal(true)
    }

    const subtitle ="Logiciel de gestion des ressources humaines"

    return (
        <div className="container-createEmpl">
            <div className="content-createEmpl">
                <Title height="auto"  subTitle={subtitle}/>
                <section className="createEmpl-table__container">
                    <h3 className="createEmpl-title">Creation of an employee card</h3>
                    <div className="createEmpl-table__content">
                        <TableRegister modalFunction={childSubmit} sales={dataRegister.sales} employee={employee} states={dataRegister.states} />
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