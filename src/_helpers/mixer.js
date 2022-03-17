import { employee } from './employee'


const toFillList = (data) => {
    const adressStreet = data.location.street.number.toString() + " " + data.location.street.name;

    return {
        ...employee,
        id: data.id.value,
        firstName: data.name.first,
        lastName: data.name.last,
        dateOfBirth: data.dob.date,
        startDate: data.registered.date,
        state: data.location.state,
        departement: "",
        street: adressStreet,
        zipCode: data.location.postcode
    }
}

export const mixer = (data) => {
    let listOfEmployee = [];
    data.map((el) => (
        listOfEmployee.push(toFillList(el))
    ))
    console.log(listOfEmployee)
    return listOfEmployee
}