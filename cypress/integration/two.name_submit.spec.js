/// <reference types="Cypress" />

describe ('second test', () => {
    it ('Visit the app', () => {
        cy.visit('/');
    });
});

describe ('fill name input', () => {
    it ('should be fillable', () => {
        cy.get('#input_userName').type('World');
        cy.get('#input_userName').should('have.value', 'World');
    });
});