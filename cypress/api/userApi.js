class User {
    getUsers() {
        return cy.request({
            method: 'GET',
            url: '/web/index.php/api/v2/admin/users',
            failOnStatusCode: false
        })
    }

    createUser(userData) {
        return cy.request({
            method: 'POST',
            url: '/web/index.php/api/v2/admin/users',
            body: userData,
            failOnStatusCode: false
        })
    }
}

export default new User()