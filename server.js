const express = require("express");
const faker = require('@faker-js/faker');
const app = express();
const port = 8000;

app.get("/api/users/new", (req, res) => {
    res.json(newUser());
});

app.get("/api/companies/new", (req, res) => {
    res.json(newCompany());
});

app.get("/api/user/company", (req, res) => {
    res.json([newUser(), newCompany()]);
});

const newUser = () => {
    return new User(
        faker.datatype.number(), 
        faker.name.firstName(), 
        faker.name.lastName(), 
        faker.phone.phoneNumber(),
        faker.internet.email(),
        faker.internet.password()
    );
}

const newCompany = () => {
    return new Company(
        faker.datatype.number(),
        faker.company.companyName(),
        faker.address.streetAddress(),
        faker.address.cityName(),
        faker.address.state(),
        faker.address.zipCode(),
        faker.address.country()
    );
}

class User {
    constructor(id, firstName, lastName, phoneNumber, email, password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
    }
}

class Company {
    constructor(id, name, street, city, state, zipCode, country) {
        this.id = id;
        this.name = name;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.country = country;
    }
}

app.listen(port, () => console.log(`Listening on port: ${port}`));