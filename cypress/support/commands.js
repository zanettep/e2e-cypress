Cypress.Commands.add('login', () => {
    cy.visit('/')
    cy.get('[name="username"]').type('zanette')
    cy.get('[name="password"]').type('123456')
})