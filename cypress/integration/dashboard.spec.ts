describe('dashboard', () => {                                       //grouping here i.e: dashboard


    it(`has an h1 with "Tour of Heroes"`, () => {                   //actual code here
        //cypress doesn't care what url... you have to give it one!
        cy.visit('http://localhost:4200/dashboard')                 //cy. for almost all cypress functions 
        cy.get('h1').contains('Tour')
    })

    //Homework 1
    it(`should have text "Top Heroes" in the right place and "Hero Search" in the right place`, () =>{
        cy.visit('http://localhost:4200')                           //ng routing for url no need for 4200
        cy.get('h3').should('contain.text', 'Top Heroes')
        cy.get('h4').should('contain.text', 'Hero Search')
    })
    //End Homework 1 
    
    it(`has the title of "Tour of Heroes"`, () => {                 //cypress is async... ran in a queue, executed immediately
        cy.visit('http://localhost:4200')
        cy.title().should('eq', 'Tour of Heroes')
    })

})