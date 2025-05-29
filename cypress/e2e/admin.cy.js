import user from '../api/userApi'
import admin from '../actions/adminAction'

describe('Admin', () => {
    beforeEach(() => {
        cy.visit('/')
    })

  	it('Search user by username', () => {
        cy.login()

        user.getUsers().then((response) => {
            const firstUser = response.body.data[0]
            const userData = [
                firstUser.userName,
                firstUser.userRole.name,
                `${firstUser.employee.firstName} ${firstUser.employee.lastName}`,
                firstUser.status ? 'Enabled' : 'Disabled'
            ]

            admin.assertUserData(userData)
        })
    })

    it('Search for an unregistered user', () => {
        const userName = 'zanettepr'

        cy.login()
        admin.assertUserNotFound(userName)
    })
})
