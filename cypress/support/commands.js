import fakerBr from 'faker-br'
import user from '../api/userApi'

Cypress.Commands.add('getRandomUser', () => {
    return user.getUsers().then((response) => {
        const randomUsers = response.body.data
        return randomUsers[
            Math.floor(Math.random() * randomUsers.length)
        ]
    })
})

Cypress.Commands.add('createUser', () => {
    cy.fixture('userData.json').then((userData) => {
        userData.username = fakerBr.internet.userName()

        return user.createUser(userData).then(() => userData)
    })
})