describe('Add and remove heroes', () => {

    beforeEach(() => {                                                  //run the visit first in every function
        cy.server()                                                     //want to run this before any requests

        cy.route({                                                      //route to intercept XHR POST requests
            method: "POST",
            url: "/api/heroes",
            response: {"id": 100, "name": "Joker"}
        })

        cy.route({                                                      //route to intercept XHR DELETE requests
            method: "DELETE",
            url: "/api/heroes/100",
            response: {}
        })

        cy.visit('/heroes')
    })

    //page-object-pattern for e2e 
    // it('something', () => {
    //     let box = page.getNewHeroTextBox()
    //     box.type('Joker')
    //     expect(page.getHeroFromList('Joker').getText()).toEqual('Joker')
    //     page.getHeroFromList('Joker').getDeleteButton().click()
    //     expect(page.getHeroFromList('Joker')).toNotExist()
    // })

    it('should add hero to list', () => {
        cy.visit('/heroes')
        cy.get('input').type('Joker')
        cy.contains('add').click()
        cy.get('ul li').contains('Joker').siblings('button').click()
    })
})