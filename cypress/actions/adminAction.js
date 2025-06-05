class Admin {
    assertUserData(userData) {
        this.searchUser(userData[0])

        userData.forEach((expectedUserData, i) => {
            cy.get('[role="cell"]').eq(i + 1).should('have.text', expectedUserData)
        })
    }

    assertDeletedUser(userName) {
        this.searchUser(userName)
        cy.get('.bi-trash').click()
        cy.contains('Yes, Delete').click()
        cy.get('.oxd-table-body').should('not.exist')
        cy.contains('No Records Found').should('be.visible')
    }

    assertUserNotFound(userName) {
        this.searchUser(userName, false)
        cy.contains('No Records Found').should('be.visible')
        cy.get('.oxd-table-row.oxd-table-card > .oxd-table-row').should('not.exist')
    }

    searchUser(userName, expectOneRecord = true) {
        cy.contains('Admin').click()
        cy.get('div .oxd-form-row > div .oxd-input').type(userName)
        cy.contains('Search').click()

        if (expectOneRecord) {
            cy.contains('(1) Record Found').should('be.visible')
        } else {
            cy.contains('No Records Found').should('be.visible')
        }
    }
}

export default new Admin()