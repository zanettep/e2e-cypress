import user from '../api/userApi'

class Admin {
    assertUserData() {
        cy.contains('Admin').click()

        user.getUsers().then((response) => {
            const firstUser = response.body.data[0]
            const userData = [
                firstUser.userName,
                firstUser.userRole.name,
                this.getUserFullName(firstUser.employee),
                firstUser.status ? 'Enabled' : 'Disabled'
            ]

            cy.get('div .oxd-form-row > div .oxd-input').type(userData[0])
            cy.contains('Search').click()
            cy.contains('(1) Record Found').should('be.visible')

            userData.forEach((expectedUserData, i) => {
                cy.get('[role="cell"]').eq(i + 1).should('have.text', expectedUserData);
            })
        })
    }

    getUserFullName(employee) {
        return employee.middleName && employee.middleName.trim() !== '' 
            ? `${employee.firstName} ${employee.middleName} ${employee.lastName}`
            : `${employee.firstName} ${employee.lastName}`
    }
}

export default new Admin()