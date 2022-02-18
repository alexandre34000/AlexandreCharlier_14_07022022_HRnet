import Calendar from "../Calendar"
import { useEffect, useState } from "react";


const DatePicker = (props) => {

    const [month, setMonth] = useState({ label: props.month || 'DEFAULT', value: "" });

    var arrayMonths = [{ label: 'January', value: "January" }, {
        label: 'February',
        value: 'February'
    }, { label: 'March', value: 'March' }, { label: 'April', value: 'April' }, { label: 'May', value: 'may' },
    { label: 'June', value: 'June' }, { label: 'July', value: 'July' },
    { label: 'August', value: 'August' }, { label: 'September', value: 'September' }, { label: 'October', value: 'October' }, { label: 'November', value: 'November' }, { label: 'December', value: 'December' }];

    function generateArrayOfYears() {
        var max = new Date().getFullYear()
        var min = max - 50
        var years = []

        for (var i = max; i >= min; i--) {
            years.push(i)
        }
        return years
    }


    const handleChange = (e) => {
        setMonth({ label: e.target.value })

    }


    return (
        <div className="datepicker-container">
            <div className="datepicker-content">
                <div className="datepicker-header">

                    <select defaultValue={props.month} onChange={handleChange}>
                  {/*   <option>March</option> */}
                       {/*  <option  disabled>Choose a salutation ...</option> */}
                        {arrayMonths.map((option) => (
                            <option key={option.value} value={option.value} selected={(month.label === "March" ? "selected" : null)} >{option.label}</option>
                        ))}
                    </select>

                </div>

                <Calendar />

            </div>
        </div>
    )
}
export default DatePicker