import { basePage } from "../../support/pageObjects/BasePage.js"

describe('Search', () =>{
    
    const name = 'Ноутбук'
    const nonExName = '123Ноутбук123'

    it('Search item', () =>{
        basePage.goToMainPage()
        basePage.searchItem(name)
        basePage.clickSearchButton()
        basePage.verifyItemsAfterSearch(name)
    })

    it('Search non-existing item', () =>{
        basePage.goToMainPage()
        basePage.searchItem(nonExName)
        basePage.clickSearchButton()
        basePage.verifyItemsAfterSearch(nonExName)
    })
})