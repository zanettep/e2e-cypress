class User {
    getUsers() {
        return cy.request({
            method: 'GET',
            url: '/web/index.php/api/v2/admin/users',
            qs: {
                limit: 50,
                offset: 0
            }
        })
    }
}

export default new User()