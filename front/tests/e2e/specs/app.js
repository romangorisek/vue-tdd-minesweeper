// https://docs.cypress.io/api/introduction/api.html

describe('App', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('App loads', () => {
    cy.contains('h1', 'Minesweeper with Vue.js and Cypress test')
  })

  it('Loads game settings component', () => {
    cy.get('[data-cy="settings"]').should('be.visible')
  })

  it('Loads game component', () => {
    cy.get('[data-cy="game"]').should('be.visible')
  })
})
