import admin from '../actions/adminAction'

describe('Admin', () => {
    beforeEach(() => {
        cy.visit('/')
    })

  	it('Search user by username', () => {
        cy.login()

        cy.getRandomUser().then((user) => {
            const userData = [
                user.userName,
                user.userRole.name,
                `${user.employee.firstName} ${user.employee.lastName}`,
                user.status ? 'Enabled' : 'Disabled'
            ]

            admin.assertUserData(userData)
        })
    })

    it('Delete searched user', () => {
        cy.login()

        cy.getRandomUser().then((user) => {
            admin.assertDeletedUser(user.userName)
        })
    })

    it('Search for an unregistered user', () => {
        const username = 'zanettepr'

        cy.login()
        admin.assertUserNotFound(username)
    })
})