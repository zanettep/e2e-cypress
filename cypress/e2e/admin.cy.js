import login from '../actions/loginAction'
import admin from '../actions/adminAction'

describe('Admin', () => {
  	it('Search user by username', () => {
        login.userLogin()

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
        login.userLogin()

        cy.getRandomUser().then((user) => {
            admin.assertDeletedUser(user.userName)
        })
    })

    it('Search for an unregistered user', () => {
        const userName = 'zanettepr'

        login.userLogin()
        admin.assertUserNotFound(userName)
    })
})