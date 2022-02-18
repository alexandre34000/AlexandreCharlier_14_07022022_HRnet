
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

const RenderHeader = (props) => {
    return props.elt.map((el, index) => {
        return <th key={index}>{el}</th>
    })
}

const RenderBody = (props) => {
    return <tr onClick={props.event} >{props.bodyElt.map((el, i) => {
        return <td className={(( el > 0) ? "calendrier-current__day" : "calendrier-hidden__day")} value={el} key={i}>{el}</td>
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


const Calendar = () => {
    let month = 7;
    let year = 2022;
    let nbColonne = 7;
    let headerElement = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    const handleChange = (e) => {
        if (e.target.childNodes[0].data >0){
        console.log(e.target.childNodes[0].data)
    }
    }

    const getDaysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    }

    const getFirstDayOnMonth = (month, year) => {
        let correctif = month - 1;
        return new Date(year, correctif, 1);
    }
    const getLastDayOnMonth = (month, year) => {
        return new Date(year, month, 0);
    }

    const getDayOfWeek = (month, year) => {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[getFirstDayOnMonth(month, year).getDay()];
    }
    const getMonthName = (month) => {
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[month - 1]
    }

    const getNbOfRows = (firstDay, nbOfMonthDays) => {
        let nbOfRows = (nbOfMonthDays + firstDay) / 7;
        return Math.ceil(nbOfRows)
    }


    let nbRows = getNbOfRows(getFirstDayOnMonth(month, year).getDay(), getDaysInMonth(month, year));
    let nbItems = nbColonne * nbRows;
    let firstDay = getFirstDayOnMonth(month, year).getDay();
    let lastDay = getLastDayOnMonth(month, year).getDay();
    let nbDaysOfMonth = getDaysInMonth(month, year);
    const initArray = buildArrayOfDays(nbItems, firstDay, nbDaysOfMonth, nbRows);

    return (
        <div>
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

 //const build = buildArrayOfDay(nbItems, firstDay, nbDaysOfMonth, nbRows)
    // console.log(build)
/* console.log("le nombre de jours dans le mois n° 2  est :" + getDaysInMonth(month, year))
console.log("le premier fevrier est un  " + getDayOfWeek(month, year));
console.log(" le mois n° 2 est le mois de : " + getMonthName(month))
console.log("le numero du premier jour du mois de fevrier est : 0 = dimanche " + getFirstDayOnMonth(month, year).getDay())
console.log("le dernier jour du mois de fevrier est : 0 = dimanche " + getLastDayOnMonth(month, year).getDay()) */

/* console.log("le nombre de ligne est : " + rows) */