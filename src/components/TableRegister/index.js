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

    const handleFocusInput = ()=>{
        if(isDatapicker.isShowing === true){
           setIsDatapicker((prevState) => ({
            ...prevState,
            isShowing: false,
            }))
        }
    }

    const dataFormPicker = (date) => {
        setUser((prevState) => ({
            ...prevState,
            [isDatapicker.el]: date
        }));
        document.querySelector(`input[name='${isDatapicker.el}']`).focus();
        setIsDatapicker((prevState) => ({
            ...prevState,
            isShowing: false,
        }));    
    }

    return (
        <div className="table-register__container">
            <form className="table-register__container-form" id="create-employee" onSubmit={handleSubmit}>
                <label className="table-register__form-label" htmlFor="first-name">First Name</label>
                <input className="table-register__form-input" type="text" id="first-name" name="firstName" autoFocus="on" autoComplete="off" placeholder="firstname" onChange={handleChange} onFocus={handleFocusInput} />

                <label className="table-register__form-label" htmlFor="last-name">Last Name</label>
                <input className="table-register__form-input" type="text" id="last-name" name="lastName" autoComplete="off" placeholder="lastname" onChange={handleChange} onFocus={handleFocusInput} />

                <label className="table-register__form-label" htmlFor="date-of-birth">Date of Birth</label>
                <input className="table-register__form-input" id="date-of-birth" type="text" name="dateOfBirth" autoComplete="off" placeholder="mm/dd/year" value={user.dateOfBirth} onChange={handleChange} onFocus={handleFocus} />

                <label className="table-register__form-label" htmlFor="start-date">Start Date</label>
                <input className="table-register__form-input" id="start-date" type="text" name="startDate" placeholder="mm/dd/year" value={user.startDate} onChange={handleChange} onFocus={handleFocus} />

                <fieldset className="table-register__address-content">
                    <legend className="table-register__form-label" >Address</legend>

                    <label className="table-register__adress-label" htmlFor="street">Street</label>
                    <input className="table-register__adress-input" id="street" type="text" name="street" autoComplete="off" placeholder="street" onChange={handleChange} onFocus={handleFocusInput}/>

                    <label className="table-register__adress-label" htmlFor="city">City</label>
                    <input className="table-register__adress-input" id="city" type="text" name="city" autoComplete="off" placeholder="city" onChange={handleChange} onFocus={handleFocusInput} />

                    <label className="table-register__adress-label" htmlFor="state">State</label>
                    <select className="table-register__form-select" name="state" id="state" autoComplete="off" placeholder="state" onChange={handleChange} onFocus={handleFocusInput}>
                        {props.states.map((dep, i) => <option key={i}>{dep.name}</option>
                        )}
                    </select>

                    <label className="table-register__adress-label" htmlFor="zip-code">Zip Code</label>
                    <input className="table-register__adress-input" id="zip-code" type="number" name="zipcode" autoComplete="off" placeholder="zipcode" onChange={handleChange} onFocus={handleFocusInput}/>
                </fieldset>

                <label className="table-register__form-label" htmlFor="department">Department</label>
                <select className="table-register__form-select" name="department" id="department" onChange={handleChange}>
                    {props.sales.map((dep, i) => <option  key={i}>{dep.name}</option>
                    )}
                </select>
                <div className="table-register__bottom">
                    <input type='submit' value="Save" className="table-register__bottom-button" />
                </div>
            </form>
            <div className="createEmpl-datepicker" style={{ display: isDatapicker.isShowing ? "inherit" : "none", top: isDatapicker.posX, left: isDatapicker.posY }}>
                <DatePicker dataFormPicker={dataFormPicker} dateFormat="mm/dd/yyyy" display={setIsDatapicker}/>
            </div>
        </div>
    )
}

export default CreateTable