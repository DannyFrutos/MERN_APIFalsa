const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

class Usuario {
    constructor() {
        this._Id = faker.string.uuid();
        this.firstName = faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.phone = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();

    }
}

class Empresa {
    constructor() {
        this._id = faker.string.uuid();
        this.name = faker.company.name();
        this.address = {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        };
    }
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/user/new", (req, res) => {
    res.json({ newUser: new Usuario() });
});

app.post("/api/companies/new", (req, res) => {
    res.json({ newCompany: new Empresa() });
});

app.post("/api/user/company", (req, res) => {
    res.json({ newCompany: new Empresa(), newUser: new Usuario() });
});



app.listen(port, () => console.log(`Listening on port: ${port} (http://localhost:${port}/)`));