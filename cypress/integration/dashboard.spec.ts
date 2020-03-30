describe('dashboard', () => {                                       //grouping here i.e: dashboard


    it(`has an h1 with "Tour of Heroes"`, () => {                   //actual code here
        //cypress doesn't care what url... you have to give it one!
        cy.visit('http://localhost:4200/dashboard')                 //cy. for almost all cypress functions 
        cy.get('h1').contains('Tour')
    })

    //Homework 1
    it(`should have text "Top Heroes" in the right place and "Hero Search" in the right place`, () =>{
        cy.visit('http://localhost:4200')
        cy.get('h3').should('contain.text', 'Top Heroes')
        cy.get('h4').should('contain.text', 'Hero Search')
    })


})