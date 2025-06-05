import login from '../actions/loginAction'

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Send forgot password instructions', () => {
        login.assertForgotPasswordInstructions()
    })

    it('Login with an unregistered username', () => {
        const unregisteredUsername = 'zanettepr'

        login.assertInvalidCredentialsMessage(unregisteredUsername, Cypress.env('DEFAULT_PASSWORD'))
    })

    it('Login with an unregistered password', () => {
        const unregisteredPassword = '123456'

        login.assertInvalidCredentialsMessage(Cypress.env('DEFAULT_USERNAME'), unregisteredPassword)
    })
})