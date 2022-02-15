import { useState } from "react";
import { employee } from "../../_helpers/employee";


const CreateTable = (props) => {
    const [user, setUser] = useState(employee);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.parentFunction(user);
    }

    const handleChange = (e) => {
        e.persist();
        const { name, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div>
            <form id="create-employee" onSubmit={handleSubmit}>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="firstName" autoComplete="firstname" placeholder="firstname" onChange={handleChange} />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="lastName" autoComplete="lastname" placeholder="lastname" onChange={handleChange} />

                {/* called by plugins jquery datetimepicker */}
                <label htmlFor="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="text" name="dayofbirth" autoComplete="dayofbirth" placeholder="dd/mm/year" onChange={handleChange} />

                {/* called by plugins jquery datetimepicker */}
                <label htmlFor="start-date">Start Date</label>
                <input id="start-date" type="text" name="startday" placeholder="dd/mm/year" onChange={handleChange} />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" name="street" autoComplete="street" placeholder="street" onChange={handleChange} />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" name="city" autoComplete="city" placeholder="city" onChange={handleChange} />

                    <label htmlFor="state">State</label>
                    <select name="state" id="state" autoComplete="state" placeholder="state" onChange={handleChange}></select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" name="zipcode" autoComplete="zipcode" placeholder="zipcode" onChange={handleChange} />
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
                <div className="update-form__section">
                    <input type='submit' value="Save" className="update-form__button" />

                    {/*  <button onClick={props.control} className="update-form__button">Cancel</button> */}
                </div>
            </form>

        </div>
    )
}

export default CreateTable