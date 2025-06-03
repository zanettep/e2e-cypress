import login from '../actions/loginAction'

Cypress.Commands.add('login', (
    username = Cypress.env('DEFAULT_USERNAME'),
    password = Cypress.env('DEFAULT_PASSWORD')
) => {
    cy.intercept('GET', '**/employees/leaves*').as('home')
    login.fillLoginFields(username, password)
    cy.wait('@home')
    cy.get('.oxd-userdropdown').should('be.visible')
})