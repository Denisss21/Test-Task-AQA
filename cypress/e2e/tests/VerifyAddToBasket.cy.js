import { basePage } from "../../support/pageObjects/BasePage.js"
import { smartphonesTVElectronicsPage } from "../../support/pageObjects/smartphonesTVElectronicsPage/SmartphonesTVAndElectronicsPage.js"
import { basketPage } from "../../support/pageObjects/BasketPage.js"
import { itemPage } from "../../support/pageObjects/ItemPage.js"

describe('Add Item to Cart And Veirify It', () =>{

    const firstCategoryName = 'Смартфони, ТВ і електроніка'
    const firstSubCategoryName = 'Мобільні телефони'
    const secondSubCategory = 'Телевізори'
    const itemName = 'Мобільний телефон Samsung Galaxy A24 6/128GB Dark Red (SM-A245FDRVSEK)'
    const secondItemName = 'Телевізор Kivi 50U740NB'


    it('And item to the card and verify information, price', () =>{
            basePage.goToMainPage()
            basePage.chooseCategoryByName(firstCategoryName)

            smartphonesTVElectronicsPage.chooseCategoryByName(firstSubCategoryName)  

            basePage.addItemToTheCardByIcon(itemName)
            basePage.checkforSuccessWindowAddToBucket()
            
            smartphonesTVElectronicsPage.backToCategories()
            smartphonesTVElectronicsPage.chooseCategoryByName(secondSubCategory)
            smartphonesTVElectronicsPage.clickItemByName(secondItemName)

            itemPage.clickBuyButton()

            basePage.goToBasket()

            basketPage.verifyTitlesInBasket([itemName, secondItemName])
            basketPage.verifyTotalPriceInBasket()
            basketPage.closeBasket()
    })
})