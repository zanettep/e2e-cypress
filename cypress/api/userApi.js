class User {
    getUsers() {
        return cy.request({
            method: 'GET',
            url: '/web/index.php/api/v2/admin/users'
        })
    }
}

export default new User()