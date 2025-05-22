Cypress.Commands.add('login', (
    userName = Cypress.env('DEFAULT_USERNAME'),
    password = Cypress.env('DEFAULT_PASSWORD')
) => {
    cy.intercept('GET', '**/employees/leaves*').as('home')

    cy.get('[name="username"]').type(userName)
    cy.get('[name="password"]').type(password)
    cy.get('.oxd-button').click()
    cy.wait('@home')
    cy.get('.oxd-userdropdown').should('be.visible')
})