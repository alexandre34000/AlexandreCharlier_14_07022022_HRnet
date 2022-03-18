
const RenderHeader = (props) => {
    return props.elt.map((el, index) => {
        return <th className="calendar-th" key={index}>{el}</th>
    })
}

const RenderBody = (props) => {
    return <tr onClick={props.event} >{props.bodyElt.map((el, i) => {
        return <td className={((el > 0) ? "calendrier-current__day" : "calendrier-hidden__day") +" calendar-td"} value={el} key={i}>{el}</td>
    })}</tr>
}

const buildArrayOfDays = (items, firstDay, lastDay, nbRows) => {
    let arrayInit = new Array(nbRows);
    let i = 0;
    let day = 1;
    for (let j = 0; j < items; j++) {
        if (j % 7 === 0) {
            i++
            arrayInit[i] = [];
        }
        if (j >= firstDay && j < (lastDay + firstDay)) {
            arrayInit[i].push(day);
            day++
        }
        else {
            arrayInit[i].push(0);
        }
    }
    return arrayInit;
}

const Calendar = (props) => {
    let month = props.month;
    let year = props.year;
    let nbColonne = 7;
    let headerElement = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const handleChange = (e) => {
        if (e.target.childNodes[0].data > 0) {
            props.formDate(e.target.childNodes[0].data)
        }
    }

    const getDaysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    }

    const getFirstDayOnMonth = (month, year) => {
        let correctif = month - 1;
        return new Date(year, correctif, 1);
    }

    const getNbOfRows = (firstDay, nbOfMonthDays) => {
        let nbOfRows = (nbOfMonthDays + firstDay) / 7;
        return Math.ceil(nbOfRows)
    }

    let nbRows = getNbOfRows(getFirstDayOnMonth(month, year).getDay(), getDaysInMonth(month, year));
    let nbItems = nbColonne * nbRows;
    let firstDay = getFirstDayOnMonth(month, year).getDay();
    let nbDaysOfMonth = getDaysInMonth(month, year);
    let initArray = buildArrayOfDays(nbItems, firstDay, nbDaysOfMonth, nbRows);

    return (
        <div className="calendar-container">
            <table className="calendar-table">
                <thead><tr>
                    <RenderHeader elt={headerElement} />
                </tr>
                </thead>
                <tbody className="calendar-tbody" >
                    {initArray.map((el, i) => <RenderBody key={`${i}+${el}`} bodyElt={el} event={handleChange} />
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;
