import user from '../api/userApi'

Cypress.Commands.add('getRandomUser', () => {
    return user.getUsers().then((response) => {
        const randomUsers = response.body.data
        return randomUsers[
            Math.floor(Math.random() * randomUsers.length)
        ]
    })
})