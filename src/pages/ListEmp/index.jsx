
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const ListEmpl = () => {
    const items = useSelector((state) => state.listUsers);

    useEffect(() => {
        console.log(items)
    }, [items]);

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