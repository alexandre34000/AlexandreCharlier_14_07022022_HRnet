import Calendar from "../Calendar"
import { useState } from "react";

const DatePicker = (props) => {

    const arrayMonths = [
        { label: 'January', value: 1 },
        { label: 'February', value: 2 },
        { label: 'March', value: 3 },
        { label: 'April', value: 4 },
        { label: 'May', value: 5 },
        { label: 'June', value: 6 },
        { label: 'July', value: 7 },
        { label: 'August', value: 8 },
        { label: 'September', value: 9 },
        { label: 'October', value: 10 },
        { label: 'November', value: 11 },
        { label: 'December', value: 12 }
    ];
   

    const d = new Date();
    const currentDay = d.getDate();
    const currentMonthValue = arrayMonths[d.getMonth()].value;
    const currentYear = d.getFullYear();
    const [newDate, setNewDate] = useState({
        format: props.dateFormat,
        day: currentDay,
        month_value: currentMonthValue,
        year: currentYear
    })

    const generateArrayOfYears = () => {
        let max = 2030;
        let min = max - 70;
        let years = [];
        for (let i = max; i >= min; i--) {
            years.push(i)
        }
        return years
    }

    const changeMonthAndYear = (newMonthNb) => {
        let newMonth = newMonthNb;
        let newYear = newDate.year;
        if (newMonthNb > 12) {
            newMonth = 1;
            newYear++;
        }
        else if (newMonthNb < 1) {
            newMonth = 12;
            newYear--;
        }
        setNewDate((prevState) => ({
            ...prevState,
            month_value: newMonth,
            year: newYear
        }));
    }

    const formatDate = () => {
        let day = ('0' + newDate.day).slice(-2)
        let month = ('0' + newDate.month_value).slice(-2);
        let year = newDate.year;
        switch (newDate.format) {
            case "mm/dd/yyyy":
                return month + '/' + day + '/' + year;
            case 'dd/mm/yyyy':
                return day + '/' + month + '/' + year;
            case 'yyyy/mm/dd':
                return year + '/' + month + '/' + day;
            default:
                return year + '/' + day + '/' + month;
        }
    }

    const setFormDate = (newDay) => {
        setNewDate((prevState) => ({
            ...prevState,
            day: newDay
        }));
        let date = formatDate();
        props.dataFormPicker(date);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewDate((prevState) => ({
            ...prevState,
            [name]: parseInt(value),
        }));
    }

    const handleClick = (e) => {
        e.preventDefault()
        switch (e.target.name) {
            case "next":
                let upMonth = newDate.month_value + 1;
                changeMonthAndYear(upMonth)
                break;
            case "before":
                let dwnMonth = newDate.month_value - 1;
                changeMonthAndYear(dwnMonth)
                break;
            case "current":
                setNewDate((prevState) => ({
                    ...prevState,
                    day: currentDay,
                    month_value: currentMonthValue,
                    year: currentYear
                }));
                break;
            default:
                console.log("default clicked");
        }
    }

    return (
        <div className="datepicker-container">
            <div className="datepicker-content">
                <div className="datepicker-header">
                    <button className="datepicker-icons icon__before" name="before" onClick={handleClick}></button>
                    <button className="datepicker-icons icon__currentDay" name="current" onClick={handleClick}></button>
                    <select className="datepicker-select" name="month_value" value={newDate.month_value} onChange={handleChange}>
                        {arrayMonths.map((elMonth) => (
                            <option key={elMonth.value} value={elMonth.value}>{elMonth.label}</option>
                        ))}
                    </select>
                    <select className="datepicker-select" name="year" value={newDate.year} onChange={handleChange}>
                        {generateArrayOfYears().map((el) => (
                            <option key={el} value={el}>{el}</option>
                        ))}
                    </select>
                    <button className="datepicker-icons icon__next" name="next" onClick={handleClick}></button>
                </div>
                <Calendar month={newDate.month_value} year={newDate.year} day={newDate.day} formDate={setFormDate} />
            </div>
        </div>
    )
}
export default DatePicker