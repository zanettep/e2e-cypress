class Login {
    assertForgotPasswordInstructions() {
        cy.get('.orangehrm-login-forgot').click()
        cy.get('[name="username"]').type('Admin')
        cy.get('.oxd-button--secondary').click()
        cy.contains('A reset password link has been sent to you via email.').should('be.visible')
    }

    assertUserLogout() {
        cy.get('.oxd-userdropdown').click()
        cy.get('.oxd-dropdown-menu').should('be.visible')
        cy.contains('Logout').click()
        cy.get('[name="username"]').should('be.visible')
        cy.get('[name="password"]').should('be.visible')
    }
}

export default new Login()