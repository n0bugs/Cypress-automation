class MainPage{
    urlVisit(){
        return cy.visit('/login');
    }

    clickPhoneInputField(){
        return cy.get('.input').focus().click().type('955132788', { delay: 100 })
        
    }
    
    SendButton(){
        return cy.get('.sendButton').click()
    }

    checkHelpButton(){
        return cy.get('.labelLink').click()
    }

    verifyTextLabel(){
        return cy.get('.title').should('have.text', 'Нету доступа к телефону')
    }
}
export default MainPage;