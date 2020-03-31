
declare namespace Cypress {
    interface Chainable<Subject> {
        visitAndSeed(path?: string): Chainable<Subject>
    }
}

Cypress.Commands.add('visitAndSeed', (
    path = 'dashboard'
) => {
    
))

// heroes = [
//     { "id": 1, "name": "Batman" },
//     { "id": 2, "name": "Lameo" },
//     { "id": 3, "name": "Herb" },
//     { "id": 123, "name": "DinoYuck" },
//     { "id": 11, "name": "Rami" },
//     { "id": 22, "name": "Liv" },
//     { "id": 33, "name": ":Leary" },
//     { "id": 44, "name": "C Falcon" },
//     { "id": 55, "name": "Fox" },
//     { "id": 66, "name": "Hoth" }