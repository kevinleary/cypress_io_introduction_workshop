import { url } from "inspector"

describe('dashboard', () => {                                       //grouping here i.e: dashboard


    beforeEach(() => {                                              //run the visit first in every function
        cy.visit('/dashboard')
    })

    it(`has an h1 with "Tour of Heroes"`, () => {                   //actual code here
        //cypress doesn't care what url... you have to give it one!
        cy.get('h1')
    })

    //Homework 1
    it(`should have text "Top Heroes" in the right place and "Hero Search" in the right place`, () =>{
        cy.get('h3').should('contain.text', 'Top Heroes')
        cy.get('h4').should('contain.text', 'Hero Search')
    })
    //End Homework 1 

    it(`has the title of "Tour of Heroes"`, () => {                 //cypress is async... ran in a queue, executed immediately
        cy.title().should('eq', 'Tour of Heroes')
    })

    it(`has a dashboard and heroes view links`, () => {
        //cy.get('nav a').should('have.length', 2)                  //get both <a> aliases 
        cy.get('nav a').as('ViewLinks')
        
        cy.get('@ViewLinks').first().contains('Dashboard');
        cy.get('@ViewLinks').last().contains('Heroes')
    })

    //Homework 2
    it(`has 4 heroes`, () => {
        cy.get('app-dashboard div').should('have.class', 'module').and('have.class', 'hero')

    })
    //End Homework 2

    //Homework 3 - Test that checks the color for "Tour of Heroes"
    it(`checks the color for "Tour of Heroes`, () => {
        cy.get('h1').contains('Tour of Heroes').should('have.css', 'color', 'rgb(153, 153, 153)')

    }) //End Homework 3

})


describe('search box', () => {

    it(`displays Mr.Nice when mr is input and it navigates to right page when clicked`, () => {
        cy.get('input').type('mr')
        cy.get('.search-result li').contains('Mr. Nice').click();
        cy.url().should('include', '/detail/11')
    })

})
