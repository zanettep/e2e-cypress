import login from '../actions/loginAction'
import admin from '../actions/adminAction'

describe('Admin', () => {
  	it('Search user by username', () => {
        login.userLogin()

        cy.getRandomUser().then((response) => {
            const userData = [
                response.userName,
                response.userRole.name,
                `${response.employee.firstName} ${response.employee.lastName}`,
                response.status ? 'Enabled' : 'Disabled'
            ]

            admin.assertUserData(userData)
        })
    })

    it('Delete searched user', () => {
        login.userLogin()

        cy.createUser().then((response) => {
            admin.assertDeletedUser(response.username)
        })
    })

    it('Search for an unregistered user', () => {
        const userName = 'zanettepr'

        login.userLogin()
        admin.assertUserNotFound(userName)
    })
})
