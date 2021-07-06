class BalancePage {
  visitBalancePage () {
    return cy.visit('/balance')
  }

  clickBuyFuel () {
    return cy.get('.litersItem > .itemButton > .actionButton').click()
  }

  chouseAzs () {
    return cy.get('.standartButton').should('be.visible').click()
  }

  checkFuel () {
    return cy.get(':nth-child(1) > .gasStation > :nth-child(1) > .container > .checkmark').click()
  }

  backCheckFuel () {
    return cy.get('.popUpButton').click()
  }

  moneyItemClick () {
    return cy.get('.moneyItem > .itemButton > .changeButton').click()
  }

  checkDisablebutton () {
    return cy.get(':nth-child(2) > .driverButtons > .takeButton').should('be.disabled')
  }

  takeButton () {
    return cy.get(':nth-child(3) > .driverButtons > .takeButton').should('be.visible').click()
  }

  transferInput () {
    return cy.get('.transferInput').click().type('100.1')
  }

  takeButtonDriver () {
    return cy.get('.popUpButton').click().should('be.visible')
  }

  closeButton () {
    return cy.get('.closeButton').click()
  }

  buyFuelButton () {
    return cy.get('.logoSide > .outlinedButton').click()
  }

  checkTemplateBuyFuel () {
    return cy.get('.custom-template').should('be.visible')
  }
}
export default BalancePage
