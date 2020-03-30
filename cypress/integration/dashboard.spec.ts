describe('dashboard', () => {                                       //grouping here i.e: dashboard


    it(`has an h1 with "Tour of Heroes"`, () => {                   //actual code here
        //cypress doesn't care what url... you have to give it one!
        cy.visit('http://localhost:4200/dashboard')                 //cy. for almost all cypress functions 
        cy.get('h1').should('have.text', 'Tour of Heroes')
    })


})