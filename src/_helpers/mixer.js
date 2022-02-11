
function employe(id, firstName, lastName, dateOfBirth, startDate, departement, street, state, zipCode) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.startDate = startDate;
    this.departement = departement;
    this.street = street;
    this.state = state;
    this.zipCode = zipCode;
};

const toFillList = (data) => {
    const adressStreet = data.location.street.number.toString() + " " + data.location.street.name;
    return new employe(
        data.id.value,
        data.name.first,
        data.name.last,
        data.dob.date,
        data.registered.date,
        data.id.name,
        adressStreet,
        data.location.state,
        data.location.postcode
    );
}

export const mixer = (data) => {
    let listOfEmployee = [];
    data.map((el) => (
        listOfEmployee.push(toFillList(el))
    ))
    return listOfEmployee
}