/// <reference types="Cypress" />

describe('Ejercicio 1', () => {
    it('Validar Titulo', () => {
      cy.visit('https://www.google.com/')
      cy.title().should('eq', 'Gooxdgle')
      cy.log ("la funcion da ok lpm")

    

    })
  })