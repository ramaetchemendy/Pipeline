/// <reference types="Cypress" />

describe('Ejercicio 1', () => {
    it('Validar Titulo', () => {
      cy.visit('https://www.instagram.com/')
      cy.title().should('eq', 'Instagram')
      cy.log ("la funcion da ok lpm")

    

    })
  })