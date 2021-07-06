class CertificatePage {
  visitUrl () {
    return cy.visit('/certificates')
  }

  sentCertificateButton () {
    return cy.get(':nth-child(1) > .certificateAmount > .sentCertificateButton').click().click()
  }

  sentDriver () {
    return cy.get('.standartInput').click().type('388736003895', { delay: 100 })
  }

  // constructor(){
  //     this.visitUrl();
  //     this.sentCertificateButton();
  //     this.sentDriver();
  // }
}
export default CertificatePage
