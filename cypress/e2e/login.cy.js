import loginAction from '../actions/loginAction.js'

describe('Login', () => {
    it('Send forgot password instructions', () => {
        cy.visit('/')
        loginAction.assertForgotPasswordInstructions()
    })
})