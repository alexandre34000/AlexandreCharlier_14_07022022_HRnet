import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import {getUsers} from '../../_actions/usersActions';
import {useDispatch,  useSelector} from 'react-redux'


const ListEmpl = () => {
    const dispatch = useDispatch();
    const items = useSelector((state)=> state.listUsers)

    useEffect(()=>{
        dispatch(getUsers())
    },[]);

    useEffect(()=>{
        console.log(items)
    },[items]);

    return (
        <div id="employee-div" className="container">
            <h2>Current Employees</h2>
            {/* call plugins jquery DataTable */}
            <table id="employee-table" className="display"></table>
          
            <Link className="main-nav-item" to="/">Home</Link>
        </div>
    );
}

export default ListEmpl;