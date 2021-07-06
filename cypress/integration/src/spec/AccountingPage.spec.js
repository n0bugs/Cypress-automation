import AccountingPage from "../../../page-object/AccountingPage";

const step = new AccountingPage()

describe('Accounting Page Test', () => {
    it('Visit Url', () => {
      step.visitUrl()
    })
    it('Download Document', () => {
        step.downloadButton()
    })
    it('Download Seal Document', () => {
        step.downloadSealDoc()
    })
    it('Download Act Document', () => {
        step.downloadActDoc()
    })
    it('Pick Date Act Document', () => {
        step.chooseDatePicker()
    })
    it('Pick Today Date Act Document', () => {
        step.chooseTodayDate()
    })
    it('Discard Date', () => {
        step.discardDate()
    })
    it('Close Date Picker', () => {
        step.closeButton()
    })
    it('Check ClipBoard', () => {
        step.checkClipBoard()
    })
})