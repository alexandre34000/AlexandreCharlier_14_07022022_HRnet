

const CreateTable= (props) =>{

    const handleSubmit=(e)=>{
        console.log("saved");
        // call pluginJquery for open modal
    }

    return(
        <div>
        <form onSubmit={handleSubmit} id="create-employee">
         <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" />
{/* called by plugins jquery datetimepicker */}
        <label htmlFor="date-of-birth">Date of Birth</label>
        <input id="date-of-birth" type="text" />

{/* called by plugins jquery datetimepicker */}
        <label htmlFor="start-date">Start Date</label>
        <input id="start-date" type="text" />

        <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            <select name="state" id="state"></select>

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
        </fieldset>

        <label htmlFor="department">Department</label> /
   {/* called by plugins jquery selectedmenu */}
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