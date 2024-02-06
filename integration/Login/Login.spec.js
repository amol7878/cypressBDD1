/// <reference types="cypress" />

import {Given,Then,When,And} from "cypress-cucumber-preprocessor/steps";

Given('I open Sauce demo Url',()=>{
    cy.visit('https://www.saucedemo.com/')
})

// When('Fill the Username',()=>{
//     cy.get('#user-name').type('standard_user')
// })

// Then('Fill the password',()=>{
//     cy.get('#password').type('secret_sauce')
// })

// Then('Click on login Button',()=>{
//     cy.get('#login-button').click()
// })

// And('validate sucessful login.',()=>{
//     cy.get('.header_secondary_container>span').should('be.visible').and('have.text','Products')
// })



Given('I open Sauce demo Url.',()=>{
    cy.visit('https://www.saucedemo.com/')
})

When('Fill the Username.',()=>{
    cy.get('#user-name').type('standard_user')
})

And('Fill the password.',()=>{
    cy.get('#password').type('secret_sauce')
})

Then('Click on login Button.',()=>{
    cy.get('#login-button').click()
})

// And('validate sucessful login.',()=>{
//     cy.get('.header_secondary_container>span').should('be.visible').and('have.text','Products')
// })