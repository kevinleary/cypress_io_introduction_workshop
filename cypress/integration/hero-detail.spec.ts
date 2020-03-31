describe('hero-detail', () => {                                         //e2e tests

    beforeEach(() => {                                                  //run the visit first in every function
        cy.server()                                                     //want to run this before any requests

        cy.route({                                                      //route to intercept XHR requests
            method: "PUT",
            url: "/api/heroes/11",
            response: {"id": 11, "name": "Mr. Mean"}
        }).as('put')                                                    //alias creation

        cy.visit('/detail/11')
    })

    it('should have the right name', () => {
        cy.get('h2').contains('MR. NICE Details')
    })

    it('should update the hero name when changed and saved', () => {    //can write data in cypress be careful!
        cy.get('input').clear().type('Mr. Mean')                        //changing the state of data is tricky
        cy.contains('save').click()                                     //let's take advantage of the cypress intercepter!
        cy.get('h2').contains('MR. MEAN Details')
        cy.wait('@put')
    })
})