import { useState } from "react";
import DatePicker from "../DatePicker";

const CreateTable = (props) => {
    const [user, setUser] = useState(props.employee);
    const [isDatapicker, setIsDatapicker] = useState({
        isShowing: false,
        posX: "",
        posY: "",
        el: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        props.modalFunction(user);
    }

    const handleChange = (e) => {
        e.persist();
        const { name, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleFocus = (e) => {
        let rect = e.target.getBoundingClientRect();
        setIsDatapicker((prevState) => ({
            ...prevState,
            isShowing: true,
            posX: rect.bottom,
            posY: rect.left,
            el: e.target.name
        }))
    }

    const dataFormPicker = (date) => {
        setUser((prevState) => ({
            ...prevState,
            [isDatapicker.el]: date
        }));
        setIsDatapicker((prevState) => ({
            ...prevState,
            isShowing: false,
        }));
    }

    return (
        <div>
            <form id="create-employee" onSubmit={handleSubmit}>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="firstName" autoFocus="on" autoComplete="off" placeholder="firstname" onChange={handleChange} />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="lastName" autoComplete="off" placeholder="lastname" onChange={handleChange} />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="text" name="dateOfBirth" autoComplete="off" placeholder="mm/dd/year" value={user.dateOfBirth} onChange={handleChange} onFocus={handleFocus} />

                <label htmlFor="start-date">Start Date</label>
                <input id="start-date" type="text" name="startDate" placeholder="mm/dd/year" value={user.startDate} onChange={handleChange} onFocus={handleFocus} />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" name="street" autoComplete="off" placeholder="street" onChange={handleChange} />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" name="city" autoComplete="off" placeholder="city" onChange={handleChange} />

                    <label htmlFor="state">State</label>
                    <select name="state" id="state" autoComplete="off" placeholder="state" onChange={handleChange}>
                        {props.states.map((dep, i) => <option key={i}>{dep.name}</option>
                        )}
                    </select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" name="zipcode" autoComplete="off" placeholder="zipcode" onChange={handleChange} />
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department" className="create-user__select-state" onChange={handleChange}>
                    {props.sales.map((dep, i) => <option key={i}>{dep.name}</option>
                    )}
                </select>
                <div className="update-form__section">
                    <input type='submit' value="Save" className="update-form__button" />
                    <input type='reset' value="reset" className="update-form__button" />
                </div>
            </form>
            <div className="createEmpl-datepicker" style={{ display: isDatapicker.isShowing ? "inherit" : "none", top: isDatapicker.posX, left: isDatapicker.posY }}>
                <DatePicker dataFormPicker={dataFormPicker} dateFormat="mm/dd/yyyy"/>
            </div>
        </div>
    )
}

export default CreateTable