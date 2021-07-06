class AccountingPage {
    visitUrl(){
        return cy.visit('/accounting')
    }
    downloadButton(){
        return cy.get('.contract > .contractBarContent > .accountButtons > button.outlinedButton').click()
    }
    downloadSealDoc(){
        return cy.get('.accountButtons > div.outlinedButton').click
    }
    downloadActDoc(){
        return cy.get('.act > .contractBarContent > .accountButtons > .outlinedButton').click()
    }
    chooseDatePicker(){
        return cy.get(':nth-child(2) > .mx-calendar-content > .mx-table > tbody > :nth-child(3) > [data-row-col="2,5"]').click()
    }
    chooseTodayDate(){
        return cy.get(':nth-child(2) > .mx-calendar-content > .mx-table > tbody > :nth-child(4) > [data-row-col="3,3"]').click()
    }
    discardDate(){
        return cy.get('.discardDate').click()
    }
    closeButton(){
        return cy.get('.closeButton').click()
    }
    checkClipBoard(){
        return cy.get('.balanceRefillBarContent > .accountButtons > .outlinedButton').click().should('have.text', '\n\t\t\t\t\t\t\t\t\tСкопировать все\n\t\t\t\t\t\t\t\t')
    }
}
export default AccountingPage