import TableRegister from "../../components/TableRegister";
import {NavLink} from 'react-router-dom';
const CreateEmpl = () => {

    return (
        <div className="container-createEmpl">
            <div className="content-createEmpl">
                <div className="createEmpl-title">
                </div>
                {/* <NavLink className="header-content__nav-link" to="/ListEmpl"> View Current Employees</NavLink> */}
                <section className="createEmpl-table__container">
                    <h2>Create Employee</h2>
                    <div className="createEmpl-table__content">
                    <TableRegister />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default CreateEmpl;