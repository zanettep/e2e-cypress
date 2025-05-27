import admin from '../actions/adminAction'

describe('Admin', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Search user', () => {
        cy.login()
        admin.assertUserData(userData)
    })
})