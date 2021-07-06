class HistoryPage{
    
    urlVisit(){
        return cy.visit('/history')
    }

    mouseAction(){
        return cy.get('.pageMainHeaderTitle').trigger('mouseover')
    }

    scrollIntoView(){
        return cy.get(':nth-child(16) > .dateActions > :nth-child(1) > [data-v-144c14de=""] > .mainInfo > .info > .infoTitle').scrollIntoView()
    }

    clickButton(){
        return cy.get(':nth-child(16) > .dateActions > :nth-child(1) > [data-v-144c14de=""] > .mainInfo > .button > .showActionButton').click()
    }

    iconDropDown(){
        return cy.get(':nth-child(1) > .shortInfo > .dataInfo > .dataInfoButton > .icon-dropDown').click();
    }

    fullInfoCheck(){
        return cy.get('.fullInfo > .ps > :nth-child(1)').should('be.visible');
    }
}
export default HistoryPage