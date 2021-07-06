import HistoryPage from '../../../page-object/HistoryPage.js'

const step = new HistoryPage()

describe('History Page Test', () => {
  it('Visit Url', () => {
    step.urlVisit()
  })
  it('Check mouseAction', () => {
    step.mouseAction()
  })
  it('Check scrollIntoView element', () => {
    step.scrollIntoView()
  })
  it('Check scrollIntoView element', () => {
    step.clickButton()
  })
  it('Check iconDropDown element', () => {
    step.iconDropDown()
  })
  it('Check fullInfoCheck driver', () => {
    step.fullInfoCheck()
  })
})
