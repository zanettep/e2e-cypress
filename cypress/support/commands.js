import login from '../actions/loginAction'
import user from '../api/userApi'

Cypress.Commands.add('login', (
    username = Cypress.env('DEFAULT_USERNAME'),
    password = Cypress.env('DEFAULT_PASSWORD')
) => {
    cy.intercept('GET', '**/employees/leaves*').as('home')
    login.fillLoginFields(username, password)
    cy.wait('@home')
    cy.get('.oxd-userdropdown').should('be.visible')
})

Cypress.Commands.add('getRandomUser', () => {
    return user.getUsers().then((response) => {
        const randomUsers = response.body.data
        return randomUsers[
            Math.floor(Math.random() * randomUsers.length)
        ]
    })
})