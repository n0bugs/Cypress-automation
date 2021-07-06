import MainPage from "../../../page-object/MainPage";

const step = new MainPage

describe('Login Page Test', () => {
    it('Visit Url', () => {
        step.urlVisit()
    })
    it('Click Phone field', () => {
        step.clickPhoneInputField()
    })
    it('Send Authorize', () => {
        step.SendButton()
    })
    it('Check Help', () => {
        step.checkHelpButton()
    })
    it('Check Verify Text wLabel', () => {
        step.verifyTextLabel()
    })
})