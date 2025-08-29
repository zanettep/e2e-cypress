import fakerBr from 'faker-br'
import user from '../api/userApi'

Cypress.Commands.add('getRandomUser', () => {
    return user.getUsers().then((response) => {
        const randomUsers = response.body.data
        return randomUsers[
            Math.floor(Math.random() * randomUsers.length)
        ]
    })
})

Cypress.Commands.add('getRandomEmployeeNumber', () => {
    return user.getEmployees().then((response) => {
        const randomEmployees = response.body.data
        return randomEmployees[
            Math.floor(Math.random() * randomEmployees.length)
        ].empNumber
    })
})

Cypress.Commands.add('createUser', () => {
    cy.fixture('userData.json').then((userData) => {
        cy.getRandomEmployeeNumber().then((employeeNumber) => {
            userData.username = fakerBr.internet.userName()
            userData.empNumber = employeeNumber
            return user.createUser(userData).then(() => userData)
        })
    })
})