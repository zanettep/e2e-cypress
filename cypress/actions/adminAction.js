class Admin {
    assertUserData(userData) {
        this.searchUser(userData[0])
        cy.contains('(1) Record Found').should('be.visible')

        userData.forEach((expectedUserData, i) => {
            cy.get('[role="cell"]').eq(i + 1).should('have.text', expectedUserData)
        })
    }

    assertDeletedUser(userName) {
        this.searchUser(userName)
        cy.contains('(1) Record Found').should('be.visible')
        cy.get('.bi-trash').click()
        cy.contains('Yes, Delete').click()
        cy.get('.oxd-table-body').should('not.exist')
        cy.contains('No Records Found').should('be.visible')
    }

    assertUserNotFound(userName) {
        this.searchUser(userName)
        cy.contains('No Records Found').should('be.visible')
        cy.get('.oxd-table-row.oxd-table-card > .oxd-table-row').should('not.exist')
    }

    searchUser(userName) {
        cy.contains('Admin').click()
        cy.get('div .oxd-form-row > div .oxd-input').type(userName)
        cy.contains('Search').click()
    }
}

export default new Admin()