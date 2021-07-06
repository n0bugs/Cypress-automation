/* eslint-disable no-undef */
class DriverPage {
  visitUrl () {
    return cy.visit('/drivers')
  }

  checkBox () {
    return cy.get('.searchedDrivers > :last-child > .driversActions > .switcher')
      .click()
  }

  assertCheckBoxText () {
    return cy.get('.searchedDrivers > :last-child > .driversActions > .switcher > .switcherText')
      .should('have.text', '\n\t\tДа\n\t') // TODO Саша fix
  }

  backToTopButton () {
    return cy.get('.toTopButton').click()
  }

  // checkTypeDriver(){
  //     return cy.get('.driversHeader > .search-wrapper > .searchForm').click().type('Dor');
  // } Поломано!w
}
export default DriverPage
