class LoginActions {
    assertForgotPasswordInstructions() {
        cy.get('.orangehrm-login-forgot').click()
        cy.get('[name="username"]').type('Admin')
        cy.contains('button', 'Reset Password').click()
        cy.contains('A reset password link has been sent to you via email.').should('be.visible')
    }
}

export default new LoginActions()