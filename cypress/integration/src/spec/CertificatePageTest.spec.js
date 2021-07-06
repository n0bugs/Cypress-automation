import CertificatePage from '../../../page-object/CertificatePage'

const Rules = new CertificatePage()

describe('Certificate Page Test', () => {
  it('Visit Url', () => {
    Rules.visitUrl()
    })
  it('Chose Certificate', () => {
    Rules.sentCertificateButton()
  })
  it('Click sent Button', () => {
    Rules.sentDriver()
  })
})
