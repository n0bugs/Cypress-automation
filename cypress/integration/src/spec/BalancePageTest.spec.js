import BalancePage from "../../../page-object/BalancePage";

const Rule = new BalancePage

describe('Balance Page Test', () => {
    it('visit Url', () => {
        Rule.visitBalancePage()
    })
    it('Click buy Fuel ', () => {
        Rule.clickBuyFuel()
    })
    it('Choose AZS ', () => {
        Rule.chouseAzs()
    })
    it('Check fuel ', () => {
        Rule.checkFuel()
    })
    it('Back modal layout ', () => {
        Rule.backCheckFuel()
    })
    it('Money Item Click', () => {
        Rule.moneyItemClick()
    })
    it('Check Disable Button', () => {
        Rule.checkDisablebutton()
    })
    it('Take Driver money', () => {
        Rule.takeButton()
    })
    it('Check TransferInput input', () => {
        Rule.transferInput()
    })
    it('Check TakeButtonDriver', () => {
        Rule.takeButtonDriver()
    })
    it('Check CloseButton', () => {
        Rule.closeButton()
    })
    it('Check BuyFuelButton', () => {
        Rule.buyFuelButton()
    })
    it('Check CheckTemplateBuyFuel Template', () => {
        Rule.checkTemplateBuyFuel()
    })
})