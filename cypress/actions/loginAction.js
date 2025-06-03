class Login {
    fillLoginFields(username, password) {
        cy.get('[name="username"]').type(username)
        cy.get('[name="password"]').type(password)
        cy.get('.oxd-button').click()
    }

    assertInvalidCredentialsMessage(username, password) {
        this.fillLoginFields(username, password)
        cy.get('.oxd-alert-content-text').should('have.text', 'Invalid credentials')
    }

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
        cy.get('.orangehrm-login-branding').should('be.visible')
    }
}

export default new Login()