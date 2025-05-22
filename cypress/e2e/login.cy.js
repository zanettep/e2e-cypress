import login from '../actions/loginAction'

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Send forgot password instructions', () => {
        login.assertForgotPasswordInstructions()
    })

    it('User logout', () => {
        cy.login()
        login.assertUserLogout()
    })
})