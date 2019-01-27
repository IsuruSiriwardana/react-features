/// <reference types="Cypress" />

describe ('First test', () => {
    it('is working', () => {
        expect (true).to.equal (true);
    });
});

describe ('second test', () => {
    it ('Visit the app', () => {
        cy.visit('/');
    });
});

describe ('input  focus test' , () => {
    it ('Focus on the input', () => {
        cy.focused ().should('have.class', 'user-name-input');
    });
});

describe ('submit button disabled by default', () => {
    it ("Initial conditon of submit button", () => {
        cy.get('#button_userName').should('have.be.disabled');
    });
});

describe ('fill name input', () => {
    it ('should be fillable', () => {
        cy.get('#input_userName').type("Hello");
        cy.get('#input_userName').should('have.value', "Hello");
    });
});

describe ('submit button enabled after filling user name', () => {
    it ("Post conditon of submit button", () => {
        cy.get('#button_userName').should('have.not.be.disabled');
    });
});

