import DriverPage from "../../../page-object/DriverPage";

const step = new DriverPage

describe('Driver Page Test', () => {
    it('Visit Url', () => {
        step.visitUrl()
    })
    it('Check select checkBox', () => {
        step.checkBox()
    })
    it('Assert CheckBox Text', () => {
        step.assertCheckBoxText()
    })
    it('Back to Top frame', () => {
        step.backToTopButton()
    })
    
})